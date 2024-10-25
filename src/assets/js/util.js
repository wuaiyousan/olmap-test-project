/*
 * @Author: fishScola
 * @Date: 2023-02-16 14:03:57
 * @LastEditors: fishScola
 * @LastEditTime: 2023-04-04 18:04:15
 * @Description: 辅助方法
 */
export function loadJs(url, only = false) {
  return new Promise((resovle, reject) => {
    if (only) {
      let srcArr = document.getElementsByTagName("script");
      for (const item of srcArr) {
        if (String(item.src).includes(url)) {
          item.remove();
        }
      }
    }

    // 创建script标签,并为此标签添加ID
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    script.onload = () => {
      resovle();
    };
    script.onerror = () => {
      reject();
    };

    // 添加标签到body尾部
    document.body.appendChild(script);
  });
}

export function loadCss(url) {
  // 创建script标签,并为此标签添加ID
  let style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", url);
  style.setAttribute("type", "text/css");
  document.head.appendChild(style);
}

// 导出文件
export function exportFile(res, defaultName = "数据导出.xlsx") {
  let { headers, data } = res;
  let fileBlob = new Blob([data]);
  // 文件名
  let fileName = defaultName;
  let attachment =
    (headers && decodeURI(headers["content-disposition"]).split(";", 2)) || [];
  if (attachment.length > 1) {
    let parts = attachment[1].split("=", 2);
    if (parts.length > 1) {
      fileName = parts[1];
    }
  }
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(fileBlob, fileName);
  } else {
    const downloadElement = document.createElement("a");
    const href = window.URL.createObjectURL(fileBlob);
    downloadElement.href = href;
    downloadElement.download = fileName;
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
    window.URL.revokeObjectURL(href);
  }
}

window.loadJs = loadJs;
window.loadCss = loadCss;
