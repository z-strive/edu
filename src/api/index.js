import http from '../ulits/http'
export const getLogin = (data)=> http({url:'/login',data}) //登录
export const getRegister = (data)=> http({url:'/register',data}) //注册
export const courseCover = (data)=>http({url:'/upload/courseCover',data}) //上传课程封面
export const addCourse = (data) => http({url:'/addCourse',data}) //添加课程
export const queryCourseByCondition = (data)=>http({url:'/queryCourseByCondition',data}) //课程查询
export const queryUserByRole = (data) => http({url:'/queryUserByRole',data}) //角色查询
export const setCourseStatusOut = (data) => http({url:'/setCourseStatusOut',data}) //下架
export const setCourseStatusDelete = (data) => http({url:'/setCourseStatusDelete',data}) //删除
export const updateCourse = (data) => http({url:'/updateCourse',data}) //修改课程
export const queryUsersByRole = (data) => http({url:'/queryUsersByRole',data}) //根据角色查询用户列表