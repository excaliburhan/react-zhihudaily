/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-04-20 09:59:26
 * @modify date 2018-04-20 09:59:26
 * @desc [工具函数]
 */

// 替换请求url，转成restful格式
export function replaceStr(str = '', obj = {}) {
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

// 点击返回顶部
export function backTop() {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

  let maxFrame = 10 // 总帧数
  let frame = 1 // 当前帧

  function step() {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0) {
      if (frame < maxFrame) {
        document.documentElement.scrollTop -= scrollTop / 2
        requestAnimationFrame(step)
        frame++
      } else if (frame >= maxFrame) {
        document.documentElement.scrollTop = 0
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

// sleep函数
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
