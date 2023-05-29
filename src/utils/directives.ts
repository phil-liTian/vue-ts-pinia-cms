import { usePermissionStore } from '@s/permission.ts'
const permissions = usePermissionStore()

// // 当自定义指令逻辑较多时，单独拎出来放到独立文件中
// const permiss = {
//   mounted(el: HTMLElement, binding: any) {
//     if( !permissions.key.includes(String(binding.value)) ) {
//       el['hidden'] = true
//     }
//   }
// }

const install = (app: any) => {
  // app.directives('permiss', permiss)
}


export default install
