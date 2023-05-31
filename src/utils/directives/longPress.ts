const longPress = {
  mounted(el: HTMLElement, binding: any) {
    const cb = binding.value
    if( !cb ) return console.error('longPress指令必须包含一个回调函数')
    let timer: any = null

    const resetTimer = () => {
      if( timer ) {
        clearTimeout(timer)
        timer = null
      }
    }

    el.addEventListener('mousedown', (e) => {
      if(e.button !== 0) return
      e.preventDefault()
      if( timer === null ) {
        timer = setTimeout(() => {
          cb()
          // timer = null
          resetTimer()
        }, 2000)
      }
    })

    el.addEventListener('mouseup', resetTimer)
  },

  unmounted(el: HTMLElement) {
    el.removeEventListener('mousedown', () => {})
    el.removeEventListener('mouseup', () => {})
  }
}


export default longPress