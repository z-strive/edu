import axios from "axios"
import { ElMessage } from 'element-plus'
import router from '../router'
const instance = axios.create({
    baseURL:'http://114.116.26.78/api',
    timeout:10000,
    method:'POST'
})

instance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
},(err)=>{
    console.log(err)
})
instance.interceptors.response.use((res)=>{
    console.log(res)
    if(res.data.status==1){
        ElMessage({
            message:res.data.message,
            type:'success'
        })
    }
    return res.data
},(err)=>{
    const token = localStorage.getItem('token')
    console.log(err)
    if(err.response.status=== 401 && token){
        localStorage.removeItem('token')
        ElMessage({
            message:'登录超时请重新登录',
            type:'warning',
            onClose:()=>{
                router.push('/') 
            }
        })
    }else{
        let err = err.response.data.data ? err.response.data.data[0].msg : err.response.data.message 
        ElMessage({
            message:err,
            type:'warning',
        })
    }
    
   return err 
})
export default instance