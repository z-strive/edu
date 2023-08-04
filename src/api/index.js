import http from '../ulits/http'
export const getLogin = (data)=> http({url:'/login',data:data})
export const getRegister = (data)=> http({url:'/register',data:data})