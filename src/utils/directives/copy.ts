import { ElMessage } from 'element-plus'

const copy = {
  mounted(el: HTMLElement, binding: any) {
    el.addEventListener('click', () => {
      const text = binding.value || ''
      // 可通过success自定义操作
      const success = binding.arg
      if(!text) return console.log('没有待拷贝的内容')
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      textarea.readOnly = true
      textarea.select()

      const res = document.execCommand('Copy')
      res && success ? success(text) : ElMessage.success('拷贝成功～');
      document.body.removeChild(textarea)
    })
  },

  unmounted(el: HTMLElement) {
    el.removeEventListener('click', () => {})
  }
}

export default copy