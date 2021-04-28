/**
 * 防抖
 * @param {function} func
 * @param {number} delay
 */
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 获取当前日期
 * @returns 年月日 时分秒
 */
export function getDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1 + '').padStart(2, 0)
  const day = (date.getDate() + '').padStart(2, 0)
  const h = (date.getHours() + '').padStart(2, 0)
  const m = (date.getMinutes() + '').padStart(2, 0)
  const s = (date.getSeconds() + '').padStart(2, 0)
  return `${year}年${month}月${day}日 ${h}时${m}分${s}秒`
}
