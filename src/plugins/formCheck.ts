import { isEmpty } from "@u/utils.ts";
import { ElMessage } from 'element-plus'

type IType = 'number' | 'price'
export default {
  install(app: any) {
    // 校验form字段格式, 可添加正则校验
    app.config.globalProperties.$lt_formCheck = (formItems: any[] = [], formData: any = {}) => {
      const len = formItems.length
      if( !len ) {
        console.warn('formCheck方法第一个参数必须是一个数组, 第二个参数是对象')
        return false
      }
      let res = ''
      for (let i = 0; i < len; i++) {
        const item = formItems[i];
        if( item.required && isEmpty(formData[item.key]) ) {
          res = `${item.label}不能为空～`
          break
        }
        if( item.rules && !item.rules.test(formData[item.key]) ) {
          res = `${item.label}不符合规则～`
          break
        }
      }
    
      if( res ) {
        ElMessage.error(res)
      } 
      return !res
    },

    app.config.globalProperties.$lt_checkIptVal = (value: string, type: IType) => {
      switch(type) {
        // 校验只可输入纯数字
        case 'number': {
          value = value.replace(/\D/gi, '')
          return value
        }
        // 只能输入价格, 价格最多只能有两位小数
        case 'price': {
          const priceReg = /[^\d\.]/g
          if( value.startsWith('.') ) return ''
          value = value.replace(priceReg, '')
          // 只能有一个小数点和两位小数
          value = value.replace(/\.{2,}/g, '.')
                  .replace(".", "$#$")
                  .replace(/\./g, "")
                  .replace("$#$", ".")
                  .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
          return value
        }
        // TODO 后续类型可在此处扩充
        default: {
          return value
        }
      }
    }
  }
}
 
