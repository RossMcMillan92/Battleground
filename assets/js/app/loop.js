const Loop = () => {
  let lastTime = 0
  let stopped = false
  let callback
  let animationFrame

  const start = function(fn) {
    stopped = false
    if (typeof fn !== "undefined") callback = fn

    animationFrame = requestAnimationFrame(_frame)
  }

  const stop = function() {
    stopped = true
    cancelAnimationFrame(animationFrame)
  }

  const _frame = function(time) {
    const delta = time - lastTime
    lastTime = time

    callback(delta)
    if (!stopped) animationFrame = requestAnimationFrame(_frame)
  }

  return {
    start,
    stop
  }
}

export default Loop
