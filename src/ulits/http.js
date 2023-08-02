import axios from "axios"
import { ElLoading } from "element-plus"

const instance = axios.create({
    baseURL:'',
    timeout:10000,
})

instance.interceptors.request.use((config)=>{
    config.headers = {
        'Authorization' : 'Bearer' + localStorage.getItem('token')
    }
    return config.headers
},(err)=>{
    console.log(err)
})
instance.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return err.message
}
)
export default instance