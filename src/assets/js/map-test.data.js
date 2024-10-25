/*
 * @Author: fishScola
 * @Date: 2022-03-10 13:51:37
 * @LastEditors: fishScola
 * @LastEditTime: 2023-06-13 17:30:48
 * @Description: 行政区划测试数据
 */

let modulesList = [
  {
    label: "水资源-监测一张图",
    options: [
      { label: "实时报警", value: "swm-warning" },
      { label: "实时监测", value: "swm-monitoring" },
      { label: "雨情", value: "fddp-fangxun-rain" },
      { label: "水情", value: "fddp-fangxun-water" },
      { label: "水质-其它", value: "swm-waterquality" },
      { label: "水质-水质报警", value: "swm-waterquality-warning" },
      { label: "取用水", value: "swm-waterintake" },
      { label: "视频", value: "swm-videos" }
    ]
  },
  {
    label: "水旱灾害防御-防汛一张图",
    options: [
      { label: "实时报警", value: "fddp-fangxun-warning" },
      { label: "雨情", value: "fddp-fangxun-rain" },
      { label: "水情", value: "fddp-fangxun-water" },
      { label: "视频", value: "fddp-fangxun-video" }
    ]
  },
  {
    label: "水旱灾害防御-旱情一张图",
    options: [
      { label: "实时报警", value: "fddp-hanqing-warning" },
      { label: "墒情监测", value: "fddp-hanqing-moisture" },
      { label: "旱情分布", value: "fddp-hanqing-distribution" },
      { label: "旱情预测", value: "fddp-hanqing-forecast" }
    ]
  },
  {
    label: "城乡供水-供水官网",
    options: [
      { label: "报警", value: "suarwsm-supplynetwork-warning" },
      { label: "监测", value: "suarwsm-supplynetwork" },
      { label: "专题分析-农村供水工程", value: "suarwsm-rwsp" },
      { label: "专题分析-群众来访分析", value: "suarwsm-acv" },
      { label: "农村供水-水质管理/水质统计分析", value: "suarwsm-rws-wsa" }
    ]
  },
  {
    label: "智慧水务工程",
    options: [{ label: "水库管理", value: "swem-reservoir" }]
  },
  {
    label: "水务监管",
    options: [
      { label: "来访问题一张图", value: "swsu-visiting-problems" },
      { label: "问题管理-问题登记", value: "swsu-problem-location" }
    ]
  },
  {
    label: "运维管理",
    options: [
      { label: "运维巡检-巡检记录", value: "som-maintain-inspection" },
      { label: "运维巡检-设备维修-巡检上报", value: "som-maintain-location" }
    ]
  }
];

let townGeom = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [112.9661, 35.8138],
        [113.0272, 35.7499],
        [112.9427, 35.7197],
        [112.9304, 35.7767],
        [112.9661, 35.8138]
      ]
    ]
  },
  properties: { code: "140581102", name: "东城街道" }
};

let villageGeom = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [112.9235, 35.8231] },
  properties: { code: "14058110201", name: "育红社区居委会" }
};

let districtGeom = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [112.7766, 35.9318],
        [112.7692, 35.8973],
        [112.7356, 35.8869],
        [112.7287, 35.8654],
        [112.7438, 35.8425],
        [112.7373, 35.8193],
        [112.7067, 35.8055],
        [112.7046, 35.7874],
        [112.7179, 35.7757],
        [112.7141, 35.746],
        [112.7227, 35.7253],
        [112.7154, 35.7063],
        [112.7964, 35.671],
        [112.8964, 35.6856],
        [112.9705, 35.6787],
        [113.0281, 35.6811],
        [113.0587, 35.6548],
        [113.1139, 35.6548],
        [113.1376, 35.7031],
        [113.1509, 35.7488],
        [113.104, 35.7919],
        [113.1065, 35.8177],
        [113.1402, 35.8302],
        [113.138, 35.8751],
        [113.054, 35.8992],
        [112.9919, 35.9216],
        [112.8785, 35.929],
        [112.8634, 35.9458],
        [112.8484, 35.9807],
        [112.8384, 35.8824],
        [112.7766, 35.9318]
      ]
    ]
  },
  properties: { code: "140581", name: "高平市" }
};

// 水库管理
let reservoirSearchObj = {
  keywordTips: "请输入搜索关键词，如行政区划、水库、流量站",
  // 搜索设置
  requestObj: {
    // 水库管理
    url: "/api/swms-swem/reservoir-map/search",
    method: "get",
    params: {
      keyword: ""
    }
  },
  showGroups: [
    { code: "reservoirList", name: "水库", type: "RESERVOIR" },
    { code: "regionList", name: "行政区划", type: "REGION" },
    { code: "inStationList", name: "入库流量站", type: "INBOUND" },
    { code: "outStationList", name: "出库流量站", type: "OUTBOUND" },
    { code: "dischargeStationList", name: "泄水流量站", type: "RELEASE" }
  ]
};

// 来访问题一张图
let problemSearchObj = {
  keywordTips: "请输入搜索关键词，如行政区划、水库、来访人、问题地址",
  // 搜索设置
  requestObj: {
    url: "/api/swms-swsu/map-problem-statistics/search",
    method: "get",
    params: {
      keyword: ""
    }
  },
  showGroups: [
    { code: "region", name: "行政区划", type: "REGION" },
    { code: "baseReservoir", name: "水库", type: "RESERVOIR" },
    {
      code: "problemVisitor",
      name: "来访人",
      type: "VISITOR",
      show: "visitor_name"
    },
    {
      code: "problemAddr",
      name: "问题地址",
      type: "PROBLEM",
      show: "problem_address"
    }
  ]
};

// 农村供水工程
let supplyProjectSearchObj = {
  keywordTips: "请输入搜索关键词，如行政区划、水库、水厂、供水工程等",
  // 搜索设置
  requestObj: {
    url: "/api/swms-suarwsm/subject-analysis/rwsp-subject-map-search",
    method: "get",
    params: {
      keyword: ""
    }
  },
  showGroups: [
    { code: "baseRwsp_DISPERSE", name: "分散供水工程", type: "DISPERSE" },
    { code: "baseRwsp_JOINT", name: "联片集中供水工程", type: "JOINT" },
    {
      code: "baseRwsp_NETWORK_EXTENSION",
      name: "城市供水延伸工程",
      type: "NETWORK_EXTENSION"
    },
    { code: "baseRwsp_CONCENTRATE", name: "集中供水工程", type: "CONCENTRATE" },
    { code: "baseReservoir", name: "水库", type: "RESERVOIR" },
    { code: "baseStinfo_PSG", name: "管网流量站", type: "PSG" },
    { code: "baseStinfo_VWM", name: "村庄远传水表", type: "VWM" },
    { code: "region", name: "行政区划", type: "REGION" },
    { code: "baseStinfo_ESG", name: "企业流量站", type: "ESG" },
    { code: "basePlant", name: "水厂", type: "PLANT" },
    { code: "basePool", name: "水池", type: "POOL" }
  ]
};

// 群众来访问题
let visitingSearchObj = {
  keywordTips:
    "请输入搜索关键词，如行政区划、水库、水厂、供水工程、来访人、问题地址等",
  // 搜索设置
  requestObj: {
    url: "/api/swms-suarwsm/subject-analysis/visiting-subject-map-search",
    method: "get",
    params: {
      keyword: ""
    }
  },
  showGroups: [
    { code: "baseRwsp_DISPERSE", name: "分散供水工程", type: "DISPERSE" },
    { code: "baseRwsp_JOINT", name: "联片集中供水工程", type: "JOINT" },
    {
      code: "baseRwsp_NETWORK_EXTENSION",
      name: "城市供水延伸工程",
      type: "NETWORK_EXTENSION"
    },
    { code: "baseRwsp_CONCENTRATE", name: "集中供水工程", type: "CONCENTRATE" },
    { code: "baseReservoir", name: "水库", type: "RESERVOIR" },
    {
      code: "problemVisitor",
      name: "来访人",
      type: "VISITOR",
      show: "visitor_name"
    },
    {
      code: "problemAddr",
      name: "问题地址",
      type: "PROBLEM",
      show: "problem_address"
    },
    { code: "region", name: "行政区划", type: "REGION" },
    { code: "basePlant", name: "水厂", type: "PLANT" },
    { code: "basePool", name: "水池", type: "POOL" }
  ]
};

// 供水官网一张图
let networkSearchObj = {
  keywordTips: "请输入搜索关键词，如行政区划、水库、水厂、测站等",
  // 搜索设置
  requestObj: {
    url: "/api/swms-suarwsm/suarwsm-map/search",
    method: "get",
    params: {
      keyword: ""
    }
  },
  showGroups: [
    { code: "baseStinfoESG", name: "企业流量站", type: "ESG" },
    { code: "baseStinfoVWM", name: "村庄远传水表", type: "VWM" },
    { code: "baseStinfoPSG", name: "管网流量站", type: "PSG" },
    { code: "baseReservoir", name: "水库", type: "RESERVOIR" },
    { code: "region", name: "行政区划", type: "REGION" },
    { code: "basePlant", name: "水厂", type: "PLANT" },
    { code: "basePool", name: "水池", type: "POOL" }
  ]
};

// 测试添加的断面和河流
let waterQData = [
  {
    type: "river",
    id: "1468460537469833217",
    name: "测试河流2@V1",
    extData: { lon: "", lat: "", value: "FOUR_WQT" }
  },
  {
    type: "section",
    id: "1458717287323418630",
    name: "永录河@断面",
    extData: { lon: "113.0271", lat: "35.7922", value: "TWO_WQT" }
  },
  {
    type: "section",
    id: "1468481495245099010",
    name: "野川河@断面",
    extData: { lon: "112.902", lat: "35.748", value: "FOUR_WQT" }
  },
  {
    type: "river",
    id: "1460087242685120513",
    name: "222@V1",
    extData: { lon: "", lat: "", value: "TWO_WQT" }
  }
];

// 巡检轨迹
let inspectionList = [
  {
    id: "1460906434261684227",
    type: "inspection",
    name: "雨量水位站453 - 设备损坏",
    extData: { lon: "112.8480", lat: "35.8145", markType: "report" }
  },
  {
    id: "1460906434261684229",
    type: "inspection",
    name: "雨量水位站453 - 设备离线",
    extData: { lon: "112.8597", lat: "35.7544", markType: "report" }
  },
  {
    id: "1460906434261684233",
    type: "inspection",
    name: "雨量水位站453 - 设备离线",
    extData: { lon: "112.8761", lat: "35.7403", markType: "report" }
  },
  {
    id: "1443100331515842561",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.9022", lat: "35.7262", markType: "report" }
  },
  {
    id: "1442786320370896898",
    type: "inspection",
    name: "测试流量站 - 设备离线",
    extData: { lon: "112.9280", lat: "35.7238", markType: "report" }
  },
  {
    id: "1460906434261684231",
    type: "inspection",
    name: "雨量水位站453 - 设备离线",
    extData: { lon: "112.9623", lat: "35.7163", markType: "report" }
  },
  {
    id: "1443121238519058433",
    type: "inspection",
    name: "测试流量站 - 其他",
    extData: { lon: "113.0083", lat: "35.7194", markType: "report" }
  },
  {
    id: "1460906434257489923",
    type: "inspection",
    name: " - 设备损坏",
    extData: { lon: "113.0426", lat: "35.7269", markType: "report" }
  },
  {
    id: "1443127150805782529",
    type: "inspection",
    name: "测试流量站 - 其他",
    extData: { lon: "113.0701", lat: "35.7575", markType: "report" }
  },
  {
    id: "1443128422963351553",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "113.0595", lat: "35.7771", markType: "report" }
  },
  {
    id: "1443410824428261377",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "113.0389", lat: "35.8025", markType: "report" }
  },
  {
    id: "1460906434257489930",
    type: "inspection",
    name: " - 工程损坏",
    extData: { lon: "113.0238", lat: "35.8316", markType: "report" }
  },
  {
    id: "1460906434257489928",
    type: "inspection",
    name: " - 设备离线",
    extData: { lon: "113.0471", lat: "35.8474", markType: "report" }
  },
  {
    id: "1460906434257489924",
    type: "inspection",
    name: " - 设备离线",
    extData: { lon: "113.0121", lat: "35.8677", markType: "report" }
  },
  {
    id: "1465198592560992257",
    type: "inspection",
    name: "雨量水位站453 - 工程损坏",
    extData: { lon: "112.9887", lat: "35.8763", markType: "report" }
  },
  {
    id: "1460906434257489926",
    type: "inspection",
    name: " - 设备离线",
    extData: { lon: "112.9884", lat: "35.8914", markType: "report" }
  },
  {
    id: "1460906434261684235",
    type: "inspection",
    name: "雨量水位站453 - 工程损坏",
    extData: { lon: "112.9482", lat: "35.8938", markType: "report" }
  },
  {
    id: "1443414592695832577",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.9039", lat: "35.8536", markType: "report" }
  },
  {
    id: "1443446482991583234",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8974", lat: "35.8333", markType: "report" }
  },
  {
    id: "1447818046763700226",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8877", lat: "35.8127", markType: "report" }
  },
  {
    id: "1447847257515757569",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8568", lat: "35.8453", markType: "report" }
  },
  {
    id: "1447817772040982530",
    type: "inspection",
    name: "测试流量站 - 违法行为",
    extData: { lon: "112.8342", lat: "35.8333", markType: "report" }
  },
  {
    id: "1443411050811625474",
    type: "inspection",
    name: "测试流量站 - 其他",
    extData: { lon: "112.8067", lat: "35.8072", markType: "report" }
  },
  {
    id: "1447848841037484034",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8373", lat: "35.8158", markType: "report" }
  },
  {
    id: "1448475951007535106",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8586", lat: "35.8244", markType: "report" }
  },
  {
    id: "1455737869460049921",
    type: "inspection",
    name: "测试流量站 - 设备损坏",
    extData: { lon: "112.8620", lat: "35.8137", markType: "report" }
  }
];

// 不达标水质分布村
let SWQDList = [
  {
    id: "140581001201",
    type: "swqd",
    name: "大冯庄村委会",
    extData: { regionCode: "140581001201" }
  },
  {
    id: "140581107201",
    type: "swqd",
    name: "马村村委会",
    extData: { regionCode: "140581107201" }
  },
  {
    id: "140581109201",
    type: "swqd",
    name: "寺庄村委会",
    extData: { regionCode: "140581109201" }
  }
];

// 动画点坐标点
let flashPoints = [
  {
    id: 445673667425,
    name: "111",
    type: "flashpoint",
    extData: { lon: 112.8892, lat: 35.764, featureType: "SG" }
  },
  {
    id: 875115776675,
    name: "222",
    type: "flashpoint",
    extData: { lon: 112.7635, lat: 35.8698, featureType: "WQ" }
  },
  {
    id: 950878307916,
    name: "333",
    type: "flashpoint",
    extData: { lon: 113.0358, lat: 35.8825, featureType: "WQ" }
  },
  {
    id: 128445291678,
    name: "444",
    type: "flashpoint",
    extData: { lon: 112.9489, lat: 35.8869, featureType: "PP" }
  }
];

// 旱情分布 - 插值示例数据
let droughtAnalysisData = [
  {
    id: "1476491224559960065",
    stcd: "4173635100",
    rsm: 38.7,
    lgtd: "112.935395",
    lttd: "35.829231"
  },
  {
    id: "1476491224572542977",
    stcd: "4173635200",
    rsm: 29.1,
    lgtd: "112.953143",
    lttd: "35.802687"
  },
  {
    id: "1476491224572542978",
    stcd: "4173635300",
    rsm: 48.8,
    lgtd: "112.886195",
    lttd: "35.725523"
  },
  {
    id: "1476491224576737281",
    stcd: "4173635400",
    rsm: 49.0,
    lgtd: "113.031351",
    lttd: "35.786534"
  },
  {
    id: "1476491224576737282",
    stcd: "4173635500",
    rsm: 64,
    lgtd: "112.972122",
    lttd: "35.863238"
  },
  {
    id: "1476491224580931586",
    stcd: "4173635600",
    rsm: 39,
    lgtd: "112.989479",
    lttd: "35.894270"
  },
  {
    id: "1476491224585125890",
    stcd: "4173635700",
    rsm: 28,
    lgtd: "113.038638",
    lttd: "35.858212"
  },
  {
    id: "1476491224589320194",
    stcd: "4173635800",
    rsm: 34,
    lgtd: "113.134595",
    lttd: "35.746624"
  },
  {
    id: "1476491224589320195",
    stcd: "4173635900",
    rsm: 54,
    lgtd: "112.935256",
    lttd: "35.706467"
  },
  {
    id: "1476491224593514497",
    stcd: "4173636000",
    rsm: 66,
    lgtd: "112.793927",
    lttd: "35.692904"
  },
  {
    id: "1476491224593514498",
    stcd: "4173636100",
    rsm: 18,
    lgtd: "112.849607",
    lttd: "35.800081"
  },
  {
    id: "1476491224593514499",
    stcd: "4173636200",
    rsm: 25,
    lgtd: "112.857102",
    lttd: "35.877157"
  },
  {
    id: "1476491224597708802",
    stcd: "4173636300",
    rsm: 39,
    lgtd: "113.102859",
    lttd: "35.857723"
  },
  {
    id: "1476491224597708803",
    stcd: "4173636400",
    rsm: 60,
    lgtd: "113.058745",
    lttd: "35.666351"
  },
  {
    id: "1476491224601903105",
    stcd: "4173636500",
    rsm: 40,
    lgtd: "112.824369",
    lttd: "35.753251"
  }
];

// ---------------------------------------------------------------------------------- //
// 累计降雨量数据 - 2020年
// 离群值剔除掉
// {"id":"1457940738377363457","stcd":"12123","accRain":36.0,"lgtd":"115.467255000","lttd":"35.259536000"},
let accRainObj = {
  code: 200,
  status: 0,
  success: true,
  data: [
    {
      id: "1476491224559960065",
      stcd: "4173635100",
      accRain: 18763.0,
      lgtd: "112.935395",
      lttd: "35.829231"
    },
    {
      id: "1476491224572542977",
      stcd: "4173635200",
      accRain: 19120.0,
      lgtd: "112.953143",
      lttd: "35.802687"
    },
    {
      id: "1476491224572542978",
      stcd: "4173635300",
      accRain: 18892.0,
      lgtd: "112.886195",
      lttd: "35.725523"
    },
    {
      id: "1476491224576737281",
      stcd: "4173635400",
      accRain: 19028.0,
      lgtd: "113.031351",
      lttd: "35.786534"
    },
    {
      id: "1476491224576737282",
      stcd: "4173635500",
      accRain: 19244.0,
      lgtd: "112.972122",
      lttd: "35.863238"
    },
    {
      id: "1476491224580931586",
      stcd: "4173635600",
      accRain: 18887.0,
      lgtd: "112.989479",
      lttd: "35.894270"
    },
    {
      id: "1476491224585125890",
      stcd: "4173635700",
      accRain: 18955.0,
      lgtd: "113.038638",
      lttd: "35.858212"
    },
    {
      id: "1476491224589320194",
      stcd: "4173635800",
      accRain: 19034.0,
      lgtd: "113.134595",
      lttd: "35.746624"
    },
    {
      id: "1476491224589320195",
      stcd: "4173635900",
      accRain: 19153.0,
      lgtd: "112.935256",
      lttd: "35.706467"
    },
    {
      id: "1476491224593514497",
      stcd: "4173636000",
      accRain: 18872.0,
      lgtd: "112.793927",
      lttd: "35.692904"
    },
    {
      id: "1476491224593514498",
      stcd: "4173636100",
      accRain: 18978.0,
      lgtd: "112.849607",
      lttd: "35.800081"
    },
    {
      id: "1476491224593514499",
      stcd: "4173636200",
      accRain: 19205.0,
      lgtd: "112.857102",
      lttd: "35.877157"
    },
    {
      id: "1476491224597708802",
      stcd: "4173636300",
      accRain: 19299.0,
      lgtd: "113.102859",
      lttd: "35.857723"
    },
    {
      id: "1476491224597708803",
      stcd: "4173636400",
      accRain: 18806.0,
      lgtd: "113.058745",
      lttd: "35.666351"
    },
    {
      id: "1476491224601903105",
      stcd: "4173636500",
      accRain: 18918.0,
      lgtd: "112.824369",
      lttd: "35.753251"
    },
    {
      id: "1476491224601903106",
      stcd: "4173636600",
      accRain: 18938.0,
      lgtd: "112.897632",
      lttd: "35.852443"
    },
    {
      id: "1477897430172221442",
      stcd: "4173634800",
      accRain: 18979.0,
      lgtd: "112.839633",
      lttd: "35.951257"
    },
    {
      id: "1477897430180610050",
      stcd: "4173634900",
      accRain: 19140.0,
      lgtd: "112.935789",
      lttd: "35.709955"
    },
    {
      id: "1477897430184804353",
      stcd: "4173635000",
      accRain: 18928.0,
      lgtd: "112.949373",
      lttd: "35.688641"
    },
    {
      id: "1477898138145570817",
      stcd: "4173632100",
      accRain: 18937.0,
      lgtd: "112.848053",
      lttd: "35.899978"
    },
    {
      id: "1477898138162348033",
      stcd: "4173632200",
      accRain: 19292.0,
      lgtd: "112.935138",
      lttd: "35.804428"
    },
    {
      id: "1477898138162348034",
      stcd: "4173632300",
      accRain: 19003.0,
      lgtd: "112.949303",
      lttd: "35.688576"
    },
    {
      id: "1477898138166542338",
      stcd: "4173632400",
      accRain: 18888.0,
      lgtd: "112.830410",
      lttd: "35.732569"
    },
    {
      id: "1477898138166542339",
      stcd: "4173632500",
      accRain: 18892.0,
      lgtd: "113.007685",
      lttd: "35.786309"
    },
    {
      id: "1477898138174930946",
      stcd: "4173632600",
      accRain: 18913.0,
      lgtd: "112.990126",
      lttd: "35.779158"
    },
    {
      id: "1477898138174930947",
      stcd: "4173632700",
      accRain: 19195.0,
      lgtd: "112.997680",
      lttd: "35.769294"
    },
    {
      id: "1477898138179125249",
      stcd: "4173632800",
      accRain: 19153.0,
      lgtd: "112.768076",
      lttd: "35.821120"
    },
    {
      id: "1477898138183319554",
      stcd: "4173632900",
      accRain: 19261.0,
      lgtd: "112.770868",
      lttd: "35.812779"
    },
    {
      id: "1477898138183319555",
      stcd: "4173633000",
      accRain: 19092.0,
      lgtd: "112.782701",
      lttd: "35.831387"
    },
    {
      id: "1477898138187513858",
      stcd: "4173633100",
      accRain: 18779.0,
      lgtd: "112.884570",
      lttd: "35.915450"
    },
    {
      id: "1477898138187513859",
      stcd: "4173633200",
      accRain: 19096.0,
      lgtd: "112.752895",
      lttd: "35.749244"
    },
    {
      id: "1477898138191708162",
      stcd: "4173633300",
      accRain: 19128.0,
      lgtd: "112.812529",
      lttd: "35.758477"
    },
    {
      id: "1477898138191708163",
      stcd: "4173633400",
      accRain: 18876.0,
      lgtd: "112.791649",
      lttd: "35.854284"
    },
    {
      id: "1477898138195902466",
      stcd: "4173633500",
      accRain: 18884.0,
      lgtd: "112.935943",
      lttd: "35.710279"
    },
    {
      id: "1477898138195902467",
      stcd: "4173633600",
      accRain: 18794.0,
      lgtd: "112.807083",
      lttd: "35.898636"
    },
    {
      id: "1477898138195902468",
      stcd: "4173633700",
      accRain: 19163.0,
      lgtd: "112.804919",
      lttd: "35.892923"
    },
    {
      id: "1477898138200096769",
      stcd: "4173633800",
      accRain: 19128.0,
      lgtd: "112.811892",
      lttd: "35.892396"
    },
    {
      id: "1477898138200096770",
      stcd: "4173633900",
      accRain: 18948.0,
      lgtd: "112.890545",
      lttd: "35.831363"
    },
    {
      id: "1477898138204291074",
      stcd: "4173634000",
      accRain: 19121.0,
      lgtd: "113.029731",
      lttd: "35.859497"
    },
    {
      id: "1477898138204291075",
      stcd: "4173634100",
      accRain: 19129.0,
      lgtd: "112.950531",
      lttd: "35.744037"
    },
    {
      id: "1477899411817283585",
      stcd: "4173634200",
      accRain: 18964.0,
      lgtd: "112.792216",
      lttd: "35.854483"
    },
    {
      id: "1477899411821477889",
      stcd: "4173634300",
      accRain: 19260.0,
      lgtd: "112.788546",
      lttd: "35.771287"
    },
    {
      id: "1477899411821477890",
      stcd: "4173634400",
      accRain: 18861.0,
      lgtd: "112.983437",
      lttd: "35.735251"
    },
    {
      id: "1477899411821477891",
      stcd: "4173634500",
      accRain: 18879.0,
      lgtd: "112.748103",
      lttd: "35.711220"
    },
    {
      id: "1477899411821477892",
      stcd: "4173634600",
      accRain: 19000.0,
      lgtd: "113.134578",
      lttd: "35.746610"
    },
    {
      id: "1477899411829866498",
      stcd: "4173634700",
      accRain: 19173.0,
      lgtd: "112.886138",
      lttd: "35.725537"
    },
    // {
    //   id: "1477932825442304002",
    //   stcd: "41000070",
    //   accRain: 19153.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825450692610",
    //   stcd: "41700035",
    //   accRain: 18994.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825450692611",
    //   stcd: "41700040",
    //   accRain: 18957.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825450692612",
    //   stcd: "41700055",
    //   accRain: 19083.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825450692613",
    //   stcd: "41735001",
    //   accRain: 19089.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825454886914",
    //   stcd: "41735203",
    //   accRain: 19021.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825454886915",
    //   stcd: "41735204",
    //   accRain: 18876.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825454886916",
    //   stcd: "41735205",
    //   accRain: 19107.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825454886917",
    //   stcd: "41735206",
    //   accRain: 18909.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825454886918",
    //   stcd: "41735207",
    //   accRain: 18811.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825459081218",
    //   stcd: "41735209",
    //   accRain: 18720.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825459081219",
    //   stcd: "41735210",
    //   accRain: 18937.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825459081220",
    //   stcd: "41735211",
    //   accRain: 18862.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825459081221",
    //   stcd: "41735222",
    //   accRain: 18896.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825459081222",
    //   stcd: "41735606",
    //   accRain: 18912.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825463275522",
    //   stcd: "41735610",
    //   accRain: 18913.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825463275523",
    //   stcd: "41735620",
    //   accRain: 18942.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825463275524",
    //   stcd: "41735805",
    //   accRain: 19067.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825463275525",
    //   stcd: "41736005",
    //   accRain: 18786.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825463275526",
    //   stcd: "41736050",
    //   accRain: 19032.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825467469826",
    //   stcd: "41736100",
    //   accRain: 18915.0,
    //   lgtd: null,
    //   lttd: null
    // },
    // {
    //   id: "1477932825467469827",
    //   stcd: "41736201",
    //   accRain: 18827.0,
    //   lgtd: null,
    //   lttd: null
    // }
  ],
  msg: "操作成功"
};

// 水质实时查询结果
let wqlist = [
  {
    id: "1463703917909790722",
    name: "23e",
    type: "WQ",
    lon: "112.913700",
    lat: "35.796100"
  },
  {
    id: "1463703875547320321",
    name: "3e4",
    type: "WQ",
    lon: "112.928200",
    lat: "35.800500"
  },
  {
    id: "1460913245640687617",
    name: "不知道",
    type: "WQ",
    lon: "112.934000",
    lat: "35.768200"
  }
];

let geojsonObject = {
  type: "FeatureCollection",
  crs: { type: "name", properties: { name: "EPSG:4326" } },
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [112.931544, 35.7915] },
      properties: {
        address: "泫氏东街52",
        phone: "",
        name: "南赵庄中学",
        lonlat: "112.931544,35.7915"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [112.840856, 35.793988] },
      properties: {
        address: "山西省晋城市高平市",
        phone: "",
        name: "野川中学",
        lonlat: "112.840856,35.793988"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [112.9194, 35.771948],
          [112.922184, 35.795652],
          [112.893456, 35.859816]
        ]
      },
      properties: {
        address: "3个中学直接连线",
        phone: "",
        name: "长平中学-诚信中学-永录中学"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [110.83, 34.95],
            [110.83, 36.1],
            [112.2, 36.1],
            [112.2, 34.95]
          ]
        ]
      },
      properties: { address: "1121", phone: "", name: "自定义的Polygon" }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [111.83, 35.6],
            [111.83, 36.8],
            [113.2, 36.8],
            [113.2, 35.6]
          ]
        ]
      },
      properties: { address: "1121", phone: "", name: "自定义的Polygon-002" }
    }
  ]
};
let geojsonSimple = {
  type: "FeatureCollection",
  crs: { type: "name", properties: { name: "EPSG:4326" } },
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [112.931544, 35.7915] },
      properties: {
        address: "泫氏东街52",
        phone: "",
        name: "南赵庄中学",
        lonlat: "112.931544,35.7915"
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [112.840856, 35.793988] },
      properties: {
        address: "山西省晋城市高平市",
        phone: "",
        name: "野川中学",
        lonlat: "112.840856,35.793988"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [112.9194, 35.771948],
          [112.922184, 35.795652],
          [112.893456, 35.859816]
        ]
      },
      properties: {
        address: "3个中学直接连线",
        phone: "",
        name: "长平中学-诚信中学-永录中学"
      }
    }
  ]
};

// 水库面
var reservoirPolygons = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { fill: "rgba(255, 0, 0, 0.2)", value: "five line" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [112.94763625219215, 35.70616076032955],
            [112.95673143362457, 35.69500629253509],
            [112.97886876201666, 35.69380504215722],
            [112.98676269307121, 35.7004977228339],
            [112.96616982945066, 35.711823797825204],
            [112.94763625219215, 35.70616076032955]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { fill: "rgba(255, 0, 0, 0.2)", value: "3 line" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [112.92429767342219, 35.70478790275485],
            [112.93133356849255, 35.68882843344892],
            [112.91400124161191, 35.695349506928764],
            [112.92429767342219, 35.70478790275485]
          ]
        ]
      }
    }
  ]
};

// ---------------------------------------------------------------------------------- //

// SG - 高亮测试
let SGHighlightList = [
  {
    id: "1477898138195902468",
    name: "寺庄镇釜山水库上游来水流量2",
    type: "SG",
    lon: 112.804919,
    lat: 35.892923
  },
  {
    id: "1477898138200096770",
    name: "永录河入丹河流量站新增",
    type: "SG",
    lon: 112.890545,
    lat: 35.831363
  },
  {
    id: "1477898138204291074",
    name: "陈区镇陈区水库溢洪道泻水流量",
    type: "SG",
    lon: 113.029731,
    lat: 35.859497
  },
  {
    id: "1477898138187513858",
    name: "北城街街道堡头水库溢洪道下泻流量站",
    type: "SG",
    lon: 112.88457,
    lat: 35.91545
  },
  {
    id: "1477898138187513859",
    name: "章庄水库下泻流量新",
    type: "SG",
    lon: 112.752895,
    lat: 35.749244
  }
];

let DROUGHT_TESTLIST = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":"60-100"},"geometry":{"type":"Polygon","coordinates":[[[112.8153111541142,35.986547433955494],[112.81553609155624,35.986547379420855],[112.81666085158784,35.98654710494833],[112.81778561161944,35.986546828680666],[112.81891037165104,35.98654655060473],[112.82003513168266,35.986546270707755],[112.82115989171426,35.98654598897739],[112.82228465174586,35.98654570540171],[112.82340941177746,35.986545419969296],[112.82453417180908,35.98654513266925],[112.82565893184068,35.98654484349126],[112.82678369187228,35.98654455242562],[112.82679344547599,35.98654454988513],[112.82523951153925,35.986839635464996],[112.82453417180908,35.98683974427152],[112.82340941177746,35.98683991665155],[112.82228465174586,35.986840087911],[112.82115989171426,35.986840258056404],[112.82003513168266,35.98684042709463],[112.81891037165104,35.98684059503281],[112.81778561161944,35.98684076187837],[112.81666085158784,35.986840927638966],[112.81654881869821,35.98684094404244],[112.8153111541142,35.986547433955494]]]}},{"type":"Feature","properties":{"value":"60-100"},"geometry":{"type":"Polygon","coordinates":[[[113.15536672201934,35.73870969469028],[113.15536688097251,35.73758493465867],[113.15536732602061,35.73646017462707],[113.1553680365491,35.73533541459546],[113.15536899157294,35.73421065456385],[113.15537009424348,35.73315837325044],[113.1557562618395,35.73516374663551],[113.15575617438245,35.73533541459546],[113.15575574806535,35.73646017462707],[113.1557554810365,35.73758493465867],[113.15575538566459,35.73870969469028],[113.15575540572566,35.73896578703572],[113.15536684790067,35.73967386848466],[113.15536672201934,35.73870969469028]]]}},{"type":"Feature","properties":{"value":"0-40"},"geometry":{"type":"Polygon","coordinates":[[[112.81716803078751,35.986987789154206],[112.81778561161944,35.986987728477224],[112.81891037165104,35.98698761724685],[112.82003513168266,35.98698750528806],[112.82115989171426,35.986987392595914],[112.82228465174586,35.98698727916564],[112.82340941177746,35.98698716499268],[112.82446318138827,35.986987057325955],[112.82291178163504,35.98728166167493],[112.82240093354031,35.98728166167493],[112.818396,35.987279],[112.81716803078751,35.986987789154206]]]}},{"type":"Feature","properties":{"value":"45-55"},"geometry":{"type":"Polygon","coordinates":[[[112.81670359802301,35.98687764970055],[112.81778561161944,35.986877503528085],[112.81891037165104,35.98687735058632],[112.82003513168266,35.986877196642986],[112.82115989171426,35.98687704169128],[112.82228465174586,35.986876885724655],[112.82340941177746,35.98687672873683],[112.82453417180908,35.986876570721805],[112.82504538949412,35.98687649843252],[112.82465722429907,35.986950209385704],[112.82453417180908,35.98695022362237],[112.82340941177746,35.98695035290739],[112.82228465174586,35.98695048135198],[112.82115989171426,35.98695060896104],[112.82003513168266,35.986950735739704],[112.81891037165104,35.98695086169334],[112.81778561161944,35.98695098682751],[112.81701320383912,35.98695107220224],[112.81670359802301,35.98687764970055]]]}},{"type":"Feature","properties":{"value":"0-40"},"geometry":{"type":"Polygon","coordinates":[[[113.15594972302807,35.73861167635205],[113.15594978106849,35.73758493465867],[113.15594995908772,35.73646017462707],[113.15595003241093,35.73616999975137],[113.156298,35.737977],[113.15594972302807,35.73861167635205]]]}},{"type":"Feature","properties":{"value":"55-60"},"geometry":{"type":"Polygon","coordinates":[[[112.81654881869821,35.98684094404244],[112.81666085158784,35.986840927638966],[112.81778561161944,35.98684076187837],[112.81891037165104,35.98684059503281],[112.82003513168266,35.98684042709463],[112.82115989171426,35.986840258056404],[112.82228465174586,35.986840087911],[112.82340941177746,35.98683991665155],[112.82453417180908,35.98683974427152],[112.82523951153925,35.986839635464996],[112.82504538949414,35.98687649843252],[112.82453417180908,35.986876570721805],[112.82340941177746,35.98687672873683],[112.82228465174586,35.986876885724655],[112.82115989171426,35.98687704169128],[112.82003513168266,35.986877196642986],[112.81891037165104,35.98687735058632],[112.81778561161944,35.986877503528085],[112.816703598023,35.98687764970055],[112.81654881869821,35.98684094404244]]]}},{"type":"Feature","properties":{"value":"45-55"},"geometry":{"type":"Polygon","coordinates":[[[113.15580396862025,35.73870969469028],[113.15580405604449,35.73758493465867],[113.15580430082095,35.73646017462707],[113.15580466392568,35.73541509930312],[113.15590156037653,35.73591828384177],[113.15590140633213,35.73646017462707],[113.15590120606049,35.73758493465867],[113.15590113513413,35.73870021963732],[113.15580398065319,35.738877267379536],[113.15580396862025,35.73870969469028]]]}},{"type":"Feature","properties":{"value":"40-45"},"geometry":{"type":"Polygon","coordinates":[[[112.81701320383912,35.98695107220224],[112.81778561161944,35.98695098682751],[112.81891037165104,35.98695086169334],[112.82003513168266,35.986950735739704],[112.82115989171426,35.98695060896104],[112.82228465174586,35.98695048135198],[112.82340941177746,35.98695035290739],[112.82453417180908,35.98695022362237],[112.82465722429906,35.986950209385704],[112.82446318138827,35.986987057325955],[112.82340941177746,35.98698716499268],[112.82228465174586,35.98698727916564],[112.82115989171426,35.986987392595914],[112.82003513168266,35.98698750528806],[112.81891037165104,35.98698761724685],[112.81778561161944,35.986987728477224],[112.81716803078751,35.986987789154206],[112.81701320383912,35.98695107220224]]]}},{"type":"Feature","properties":{"value":"55-60"},"geometry":{"type":"Polygon","coordinates":[[[113.15575538566459,35.73870969469028],[113.1557554810365,35.73758493465867],[113.15575574806535,35.73646017462707],[113.15575617438245,35.73533541459546],[113.1557562618395,35.73516374663549],[113.15580466392568,35.73541509930311],[113.15580430082095,35.73646017462707],[113.15580405604449,35.73758493465867],[113.15580396862025,35.73870969469028],[113.15580398065319,35.73887726737955],[113.15575540572566,35.738965787035724],[113.15575538566459,35.73870969469028]]]}},{"type":"Feature","properties":{"value":"40-45"},"geometry":{"type":"Polygon","coordinates":[[[113.15590113513413,35.73870021963733],[113.15590120606049,35.73758493465867],[113.15590140633213,35.73646017462707],[113.15590156037653,35.73591828384177],[113.15595003241093,35.736169999751354],[113.15594995908772,35.73646017462707],[113.15594978106849,35.73758493465867],[113.15594972302807,35.73861167635206],[113.15590113513413,35.73870021963733]]]}}]};

let dma = {
  geojson: {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[413332.21856050205,4030936.199955529],[415365.4043863077,4030127.5465020835],[418068.61735925387,4028556.4483639607],[419916.9681099863,4026430.8450006186],[419662.8198817606,4024027.9890246666],[417906.8866685648,4021509.6111267935],[411899.7467286844,4020677.853288964],[408896.17675874423,4021717.550586251],[406886.0953173227,4023242.439955605],[405430.51910112094,4024813.5380937275],[405176.37087289523,4026315.323078698],[405122.18285531737,4027532.4037850127],[405815.3172259088,4028317.9560716827],[407163.3479299326,4029804.0851207054],[408873.07237436005,4030150.6508864677],[410836.9450470133,4030682.0517273033],[413332.21856050205,4030936.199955529]]]},"properties":null}]},
}

let aoiGeojson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[115.16440284423828,37.31198972930908],[115.0375046508789,37.24060949554443],[115.06596343688965,37.17296156158447],[115.25771033935547,37.13517202606201],[115.29596641235351,37.22008184661865],[115.28803527526856,37.311523191833494],[115.24091499023437,37.32551931610107],[115.2133892791748,37.32505277862548],[115.16440284423828,37.31198972930908]]]},"properties":{name:'片区名称'}}]};

let poiList = [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [115.1038, 37.2616] }, "properties": { "deviceType": "ZZ", "regionCode": "5308", "images": "[]", "address": "北京", "regionName": "", "installationDate": "", "deviceTypeName": "水位", "manufactureDate": "2021-06-10 00:00:00", "deviceCode": "53232710120723", "facilityName": "shuizha,shuiku", "deviceName": "L-1#闸阀箱", "manufacturer": "奥特美克科技股份有限公司" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [114.9885, 37.284] }, "properties": { "deviceType": "ZZ", "regionCode": "", "images": "", "address": "", "regionName": "", "installationDate": "", "deviceTypeName": "水位", "manufactureDate": "0001-01-01 00:00:00", "deviceCode": "ZZ01", "facilityName": "", "deviceName": "水位1", "manufacturer": "" } }];

export {
  modulesList,
  districtGeom,
  townGeom,
  villageGeom,
  reservoirSearchObj,
  problemSearchObj,
  supplyProjectSearchObj,
  visitingSearchObj,
  networkSearchObj,
  waterQData,
  inspectionList,
  SWQDList,
  flashPoints,
  droughtAnalysisData,
  SGHighlightList,
  accRainObj,
  wqlist,
  geojsonObject,
  geojsonSimple,
  reservoirPolygons,
  DROUGHT_TESTLIST,
  dma,
  aoiGeojson,
  poiList
};

