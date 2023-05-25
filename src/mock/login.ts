const LoginApi = {
  login: (data: any) => {
    const params = JSON.parse(data.body)
    
    return {
      code: 200,
      result: params
    }
  }
}


export default LoginApi