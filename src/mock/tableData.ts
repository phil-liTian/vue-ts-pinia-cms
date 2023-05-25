import Mock, { Random } from 'mockjs'
const tableNum: number = 25
interface resItem {
  desc: string,
  coverImg: string
}

type IParams = { page: number, pageSize: number }
const tableApi = {
  table: (data: IParams) => {
    const { page = 1, pageSize = 10 } = data
    let result: resItem[] = []
    for(let i = 0; i < tableNum; i++ ) {
      const color = `#${Random.integer(188, 255).toString(16)}${Random.integer(140, 255).toString(16)}${Random.integer(120, 220).toString(16)}`
      result.push(Mock.mock({
        id: '@increment',
        name: '@cname',
        address: '@city(true)',
        'status|1': ['success', 'fail'],
        date: '@date("yyyy-MM-dd")',
        coverImg: Random.image('30x30', color )
      }))
    }
    // 分页
    let res = result.slice(pageSize * (page - 1), pageSize * page)
    return {
      code: 200,
      result: {
        list: res,
        pageInfo: { ...data, total: tableNum }
      }
    }
  }
}

export default tableApi