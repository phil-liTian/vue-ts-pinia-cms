import request from '@u/request.ts'

export const requestTable = () => {
  return request({
    url: '/table',
    method: 'get',
  })
}
