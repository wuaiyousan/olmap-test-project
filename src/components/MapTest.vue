<template>
  <div class="component-wrapper map-test">
    <!-- map -->
    <whrd-map
      class="map-container"
      :moduleId="toModule"
      :mapSearch="searchObj"
    ></whrd-map>
    <!-- buttons -->
    <div class="biz-panel">
      <div class="panel-block">
        <div class="title">选择模块</div>
        <div class="line">
          <span class="line-label">模块标识：</span>
          <el-select
            class="line-input"
            size="mini"
            v-model="toModule"
            placeholder="请选择"
            clearable
          >
            <el-option-group
              v-for="group in modulesList"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">防汛一张图</div>
        <div class="line">
          <el-button size="mini" @click="onInterpolation">插值</el-button>
          <el-button size="mini" disabled @click="onInterpResult">
            插值结果
          </el-button>
          <el-button size="mini" @click="onExport">导出</el-button>
          <el-button size="mini" @click="onIsoline">等值线</el-button>
          <el-button size="mini" @click="onIsoregion">等值面</el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">旱情一张图</div>
        <div class="line">
          <el-button size="mini" @click="onDrought">旱情分布-kriging</el-button>
          <el-button size="mini" @click="onForward">旱情预测-展示</el-button>
          <el-button size="mini" @click="onEventTest">测试-事件</el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">isoline & isoregion</div>
        <div class="line">
          <el-button size="mini" @click="onTest">测试</el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">地理编码/逆编码</div>
        <div class="line">
          <el-button size="mini" @click="onControl">control</el-button>
          <el-button size="mini" @click="onEncode">encode</el-button>
          <el-button size="mini" @click="onDecode">decode</el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">POI</div>
        <div class="line">
          <el-button size="mini" @click="onPoiControl">control</el-button>
          <el-button size="mini" @click="onPoiChange">change</el-button>
          <el-button size="mini" @click="onPoiPlotting">plotting</el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">AOI</div>
        <div class="line">
          <el-button size="mini" @click="onAoiControl">control</el-button>
          <el-button size="mini" @click="onAoiChange">change</el-button>
          <el-button size="mini" @click="onAoiData">data</el-button>
          <el-button size="mini" @click="onCommonDrawing">
            common-drawing
          </el-button>
        </div>
      </div>
      <div class="panel-block">
        <div class="title">动态绘制层</div>
        <div class="line">
          <el-button size="mini" @click="onLoadSection">
            rivers & sections
          </el-button>
        </div>
        <div class="line">
          <el-button size="mini" @click="onPlotMarker">plot-marker</el-button>
          <el-button size="mini" @click="onInspection">inspection</el-button>
          <el-button size="mini" @click="onSWQD">swqd</el-button>
          <el-button size="mini" @click="onFlashPoints">flash-points</el-button>
        </div>
        <div class="line">
          <el-input
            class="line-input sm"
            size="mini"
            placeholder="请输入定位的点索引"
            v-model="toIndex"
          >
          </el-input>
          <el-button size="mini" @click="onFocusDrawing">
            focus-drawing
          </el-button>
          <el-button size="mini" @click="onClearDrawing">
            clear-drawing
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  modulesList,
  reservoirSearchObj,
  problemSearchObj,
  supplyProjectSearchObj,
  visitingSearchObj,
  networkSearchObj,
  inspectionList,
  SWQDList,
  flashPoints,
  droughtAnalysisData,
  accRainObj,
  wqlist,
  aoiGeojson,
  poiList,
} from '../assets/js/map-test.data'
import meterNormal from '../assets/img/meter.png'

export default {
  name: 'MapTest',
  components: {
    // WhrdMap,
  },
  props: {
    // 是否启用本地测试
    localTest: {
      type: Boolean,
      default: function () {
        return false
      },
    },
  },
  data() {
    return {
      modulesList: [],
      interpRes: null,
      // 来访问题一张图
      toModule: '',
      // 地图上搜索
      searchObj: false,
      // 要素聚焦
      toIndex: 0,
    }
  },
  watch: {
    toModule: function (newVal) {
      // 目前使用到了【地图搜索】的模块
      let searchMap = {
        // 水库管理
        'swem-reservoir': reservoirSearchObj,
        // 来访问题一张图
        'swsu-visiting-problems': problemSearchObj,
        // 农村供水工程
        'suarwsm-rwsp': supplyProjectSearchObj,
        // 群众来访问题
        'suarwsm-acv': visitingSearchObj,
        // 供水官网一张图
        'suarwsm-supplynetwork': networkSearchObj,
      }
      this.searchObj = searchMap[newVal] || false
    },
  },
  created() {
    this.doSubscribe('map-select-station', this.onMapSelection)
    this.doSubscribe('map-unselect-station', this.onMapUnselection)
    this.doSubscribe('map-plotting-geocoding', this.onPlottingGeocoding)

    // 地图打点获取坐标及地址
    this.doSubscribe('map-common-pick-data', this.onMapPick)
    this.doSubscribe('map-aoi-change', this.onMapAoiChange)

    this.modulesList = modulesList

    // 是否启用本地测试
    if (this.localTest) {
      this.doSubscribe('map-select-station', this.selectStation)
      this.doSubscribe('map-unselect-station', this.unselectStation)
      // 模拟测试
      window.setTimeout(() => {
        this.mockAction()
      }, 3000)
    }
  },
  mounted() {
    this.toModule = 'test';
    // this.toModule = 'swsu-problem-location';
    // this.toModule = 'swem-reservoir';
  },
  methods: {
    //  ---------------------------------------------------- //
    onMapPick(res) {
      console.log('--onMapPick--', res)
    },
    onMapAoiChange(res) {
      console.log('--onMapAoiChange--', res)
    },
    onAoiControl() {
      this.doSend('biz-aoi-control', {})
    },
    onAoiChange() {
      this.doSend('biz-aoi-change', {
        geojson: aoiGeojson,
        option: {
          editable: true,
          color: '#f3aab6',
          textKey: 'name',
          textColor: '#666',
        },
        callback: (res) => {
          // debugger
        },
      })
    },
    onAoiData() {
      this.doSend('biz-aoi-data', {
        geojson: aoiGeojson,
        callback: (res) => {
          debugger
        },
      })
    },
    // 仅回显数据
    onCommonDrawing() {
      debugger
      this.doSend('biz-common-drawing', {
        geojson: aoiGeojson,
        option: {
          color: '#666',
          textKey: 'name',
          textColor: '#fff',
        },
        callback: (res) => {
          debugger
        },
      })
    },
    // poi
    onPoiControl() {
      debugger
      this.doSend('biz-poi-control', { modify: true })
    },
    onPoiChange() {
      debugger
      this.doSend('biz-poi-change', {
        data: poiList,
        option: {
          icon: meterNormal,
          textKey: 'deviceName',
        },
      })
    },
    onPoiPlotting() {
      debugger
      this.doSend('biz-poi-plotting', {
        lon: 114.84546071229877,
        lat: 37.10930032811639,
        name: 'sasa',
        modify: true,
        callback: () => {
          debugger
        },
      })
    },
    //  ---------------------------------------------------- //
    // 报警动画点
    onFlashPoints() {
      debugger
      this.$mapEventHub.$emit('biz-load-features', {
        data: flashPoints,
        showField: 'featureType',
        callback: function (res) {
          debugger
        },
      })
    },
    // 不达标水质分布
    onSWQD() {
      this.$mapEventHub.$emit('biz-load-features', {
        data: SWQDList,
        showField: 'markType',
        // 非必填
        callback: function (res) {
          debugger
        },
      })
    },
    // 巡检轨迹
    onInspection() {
      debugger
      this.$mapEventHub.$emit('biz-load-features', {
        data: inspectionList,
        showField: 'markType',
        // 非必填
        callback: function (res) {
          debugger
        },
      })
    },
    onClearDrawing() {
      // ['all','drawing','animating','flashpoint']
      this.$mapEventHub.$emit('biz-clear-drawing', {
        type: 'flashpoint',
      })
    },
    // 获取地图标绘点得来的地名地址信息
    onPlottingGeocoding(res) {
      console.log('--onPlottingGeocoding--', JSON.stringify(res))
    },
    // 业务 - 标绘点定位
    onPlotMarker() {
      this.$mapEventHub.$emit('biz-plotting-changed', {
        lon: '112.97776192626955',
        lat: '35.82615051879883',
        canModify: false,
        callback: function (out) {
          console.log('--onPlotMarker--', JSON.stringify(out))
        },
      })
    },
    onFocusDrawing() {
      debugger
      let sectionId = ['1468481495245099010', '1458717287323418630']
      let riverId = ['D7AGB000000L', '1460087242685120513']
      let toList = sectionId.concat(riverId)
      let toId = this.toIndex.length
        ? toList[Number(this.toIndex)]
        : '1468460537469833217'
      this.$mapEventHub.$emit('biz-focus-drawing', {
        id: toId,
        callback: function (out) {
          debugger
          console.log('--onFocusDrawing--', JSON.stringify(out))
        },
      })
    },
    // 地名地址转换
    onControl() {
      debugger
      this.doSend('biz-common-pick', { geocoder: true })
    },
    onEncode() {
      debugger
      this.$mapEventHub.$emit('biz-geocoder-encode', {
        // city: "北京",
        address: '北京天安门',
        callback: function (out) {
          console.log('--onEncode--', JSON.stringify(out))
        },
      })
    },
    onDecode() {
      debugger
      this.$mapEventHub.$emit('biz-geocoder-decode', {
        lon: '114.338402',
        lat: '30.542797',
        callback: function (out) {
          console.log('--onDecode--', JSON.stringify(out))
        },
      })
    },
    // 事件测试
    onEventTest() {
      let obj = {
        id: '1470311559574163458',
        name: '23e',
        type: 'WQ',
        lon: '112.913700',
        lat: '35.796100',
        callback: () => {
          debugger
          this.$message.error('At callback now!')
        },
      }
      this.$mapEventHub.$emit('biz-select-card', obj)
    },
    selectStation(obj) {
      console.log('--selectStation--', obj)
    },
    unselectStation(obj) {
      console.log('--unselectStation--', obj)
    },
    mockAction() {
      this.$mapEventHub.$emit('biz-load-data', wqlist)
      window.setTimeout(() => {
        this.$mapEventHub.$emit('biz-updated-data', wqlist.slice(2))
      }, 500)
      window.setTimeout(() => {
        this.$mapEventHub.$emit('biz-select-card', wqlist[0])
      }, 1500)
      window.setTimeout(() => {
        this.$mapEventHub.$emit('biz-unselect-card', wqlist[0])
      }, 4000)
    },
    // -------------------------------------------------------------- //
    onMapSelection(info) {
      // 地图上选择
      console.log('-select-', JSON.stringify(info))
    },
    onMapUnselection(info) {
      console.log('-unselect-', JSON.stringify(info))
    },
    onLoadSection() {
      debugger
      let toData = [
        {
          type: 'section',
          id: '1458717287323418630',
          name: '永录河\\r\\n',
          extData: { lon: '112.855000', lat: '35.850000', value: 'FIVE_WQT' },
        },
        {
          type: 'section',
          id: '1468481495245099010',
          name: '野川河',
          extData: { lon: '112.845000', lat: '35.850000', value: 'FOUR_WQT' },
        },
        {
          type: 'section',
          id: '1458717287323418627',
          name: '云南河\\r\\n',
          extData: { lon: '11.000000', lat: '12.000000', value: 'FIRST_WQT' },
        },
        // 1457633450392711169 - 暂时不存在数据服务中
        {
          type: 'river',
          id: '1457633450392711169',
          name: '山洪沟#3',
          extData: { value: 'FIVE_WQT' },
        },
        {
          type: 'river',
          id: '1468460537469833217',
          name: '测试河流2',
          extData: { value: 'FOUR_WQT' },
        },
        {
          type: 'river',
          id: '1457675794521399298',
          name: '丹河干流',
          extData: { value: 'FIVE_WQT' },
        },
      ]
      this.$mapEventHub.$emit('biz-load-features', {
        // data: waterQData,
        data: toData,
        // 非必填
        callback: function (res) {
          debugger
        },
      })
    },
    // -------------------------------------------------------------- //
    // 旱情预测 - 展示播放
    onForward() {
      // 测试ok - 数据太大，已移除
      let featList = []
      featList.forEach((item, index) => {
        setTimeout(() => {
          this.$mapEventHub.$emit('biz-drought-forward', {
            data: item,
            callback: (res) => {
              debugger
            },
          })
        }, 2000 * index)
      })
    },
    // 旱情分布 - 插值
    onDrought() {
      debugger
      // 执行插值分析
      this.$mapEventHub.$emit('biz-drought-analysis', {
        points: droughtAnalysisData,
        accuracy: 400,
        callback: (res) => {
          debugger
        },
      })
    },
    // 插值后结果
    onInterpResult() {
      this.$mapEventHub.$emit('biz-rain-interp-graph', {
        rains: accRainObj.data,
        callback: (res) => {
          debugger
        },
      })
    },

    // 等值线
    onIsoline() {
      debugger
      let { min, max } = this.interpRes
      // 通过超图服务做表面分析(biz-rain-analysis2) - 服务分析效果不理想
      this.$mapEventHub.$emit('biz-rain-analysis', {
        analysisType: 'isoline',
        rains: accRainObj.data,
        min,
        max,
        interval: 50,
        callback: (res) => {
          debugger
        },
      })
    },
    // 等值面
    onIsoregion() {
      debugger
      let { min, max } = this.interpRes
      this.$mapEventHub.$emit('biz-rain-analysis', {
        analysisType: 'isoregion',
        rains: accRainObj.data,
        min,
        max,
        interval: 50,
        callback: (res) => {
          debugger
        },
      })
    },
    // 插值
    onInterpolation() {
      debugger
      let dt = [
        {
          id: '1540542770140192769',
          stcd: '4173630046',
          accRain: 211,
          lgtd: '113.134578',
          lttd: '35.746610',
        },
        {
          id: '1542497336240947201',
          stcd: '4173630011',
          accRain: 213,
          lgtd: '112.818354',
          lttd: '35.943182',
        },
      ]
      this.$mapEventHub.$emit('biz-rain-interp', {
        // rains: accRainObj.data,
        rains: dt,
        callback: (res) => {
          debugger
          let { success, msg, data } = res
          if (success) {
            this.interpRes = data
          } else {
            this.$message.error(msg)
          }
        },
      })
    },
    // 导出
    onExport() {
      debugger
      // 自定义
      this.$mapEventHub.$emit('biz-rain-export', {
        isRaw: false,
        // 导出图的标题
        title: '高平市XXXX旱情分布（测试）',
        subtitle: '生成时间：2021年12月12日15时',
        callback: function ({ data, file }) {
          debugger
        },
      })
    },
    // -------------------------------------------------------------------- //
    onTest() {
      // 绘制原始点列表
      let json = this.coordsJson({ datalist: accRainObj.data })
      this.$mapEventHub.$emit('biz-load-data', json)
    },

    coordsJson({ datalist, xkey = 'lgtd', ykey = 'lttd', zkey = 'accRain' }) {
      let out = []
      let arr = [].concat(datalist)
      for (let i = 0, len = arr.length, tmp = null; i < len; i++) {
        tmp = arr[i]
        if (tmp && tmp[xkey] && tmp[ykey]) {
          out.push({
            id: tmp.id || Math.ceil(Math.random() * 100000),
            name: [tmp.stcd, tmp[zkey]].join('-'),
            lon: tmp[xkey],
            lat: tmp[ykey],
            extData: tmp,
          })
        }
      }
      return out
    },

    doSubscribe(message, callback) {
      // 订阅
      this.$eventHub.$on(message, callback)
      // 取消订阅 - 回收处理
      this.$once('hook:beforeDestroy', () => {
        this.$eventHub.$off(message, callback)
      })
    },
    doSend(event, message) {
      this.$eventHub.$emit(event, message)
    },
  },
}
</script>
<style lang="scss" scoped>
.component-wrapper.map-test {
  position: relative;
  width: 100%;
  height: 100%;

  .map-container {
    width: 100%;
  }

  .biz-panel {
    position: absolute;
    top: 10px;
    left: 2px;
    width: 400px;
    // height: 300px;
    z-index: 1000;
    background: #fff;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;

    .panel-block {
      font-size: 12px;

      .title {
        height: 24px;
        line-height: 24px;
        padding-left: 8px;
        margin-bottom: 8px;
        background: #7f9dc3;
        color: #fff;
      }

      .line {
        margin-bottom: 8px;
      }

      .line-label {
        margin-left: 12px;
      }

      .line-input {
        width: 240px;

        &.sm {
          width: 80px;
        }
      }
      .line-btn {
        margin-left: 12px;
      }
    }
  }
}
</style>
