import request from '@u/request.ts'

export const requestTable = (data) => {
  return request({
    url: '/table',
    method: 'get',
    data
  })
}


export const requestExportTable = () => {
  return request({
    url: '/exportTableData',
    method: 'get'
  })
}
