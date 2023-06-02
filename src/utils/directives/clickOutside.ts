// 点击其它地方执行某操作

const clickOutside = {
  beforeMount(el: HTMLElement, binding: any) {
    document.addEventListener('click', (e: any) => {
      !el.contains(e.target) && binding.value()
    }, false)
  },

  unmounted() {
    document.removeEventListener('click', () => {})
  }
}

export default clickOutside