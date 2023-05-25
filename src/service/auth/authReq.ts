import request from '@u/request.ts'
interface ILoginParams {
  userName: string,
  password: string
}
export const requestLogin = (data: ILoginParams) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
