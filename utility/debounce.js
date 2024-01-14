export const debounce = (func, timeoutId, timeout = 1000) => {
  let timer
  if (timeoutId) timer = timeoutId
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
    return timer
  }
}
