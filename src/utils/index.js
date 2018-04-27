/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-04-20 09:59:26
 * @modify date 2018-04-20 09:59:26
 * @desc [工具函数]
 */

// 替换请求url，转成restful格式
export function replaceRestful(str = '', obj = {}) {
  let ret = str
  const reg = /{\w+}/g
  const matches = str.match(reg) || []
  matches.forEach(item => {
    let key = item.substring(1, item.length - 1)
    if (obj[key]) {
      ret = ret.replace(item, obj[key])
    }
  })
  return ret
}

// 替换http为https
export function replaceHttp(str) {
  return str.replace(/^http/, 'https')
}

// 点击返回顶部
export function backTop(scrollDOM) {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

  let maxFrame = 10 // 总帧数
  let frame = 1 // 当前帧
  scrollDOM = scrollDOM || document.documentElement

  function step() {
    const scrollTop = scrollDOM.scrollTop
    if (scrollTop > 0) {
      if (frame < maxFrame) {
        scrollDOM.scrollTop -= scrollTop / 2
        requestAnimationFrame(step)
        frame++
      } else if (frame >= maxFrame) {
        scrollDOM.scrollTop = 0
      }
    }
  }
  requestAnimationFrame(step)
}

// 格式化日期
export function formatDay(str) {
  if (!str) return str
  const y = str.substr(0, 4)
  const m = str.substr(4, 2)
  const d = str.substr(6, 2)
  const full = `${y}-${m}-${d}`
  const dayArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const dayIdx = new Date(full).getDay()
  const weekDay = dayArr[dayIdx]
  return `${m}月${d}日 ${weekDay}`
}

// ua判断是不是手机端，只检查ios和android
export function isMobile() {
  const ua = navigator.userAgent
  const isMobile = !!ua.match(/AppleWebKit.*Mobile.*/)
  const isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const isAndroid = ua.indexOf('Android') > -1
  return isMobile || isIos || isAndroid
}
