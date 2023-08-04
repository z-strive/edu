import http from '../ulits/http'
export const getLogin = (data)=> http({url:'/login',data}) //登录
export const getRegister = (data)=> http({url:'/register',data}) //注册
export const courseCover = (data)=>http({url:'/upload/courseCover',data}) //上传课程封面