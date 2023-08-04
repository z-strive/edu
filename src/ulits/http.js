import axios from "axios"
import { ElMessage } from 'element-plus'
const instance = axios.create({
    baseURL:'http://114.116.26.78/api',
    timeout:10000,
    method:'POST'
})

const token = localStorage.getItem('token')
instance.interceptors.request.use((config)=>{
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
},(err)=>{
    console.log(err)
})
instance.interceptors.response.use((res)=>{
    console.log(res)
    return res.data
},(err)=>{
    console.dir(err)
    if(err.response.status===401){
        ElMessage({
            message:err.response.data.message,
            type:'warning'
        })
    }else if(err.response.status===400){
        ElMessage({
            message:err.response.data.data[0].msg,
            type:'warning'
        })
    }
    
    
})
export default instance