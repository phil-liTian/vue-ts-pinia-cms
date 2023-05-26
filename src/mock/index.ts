import Mock from 'mockjs'
import LoginApi from './login'
import tableApi from './tableData'

Mock.mock(/\/login/, 'post', LoginApi.login)
Mock.mock(/\/table/, 'get', tableApi.table)
Mock.mock(/\/exportTableData/, 'get', tableApi.exportTableData)