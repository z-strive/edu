import axios from "axios"
const instance = axios.create({
    baseURL:'http://114.116.26.78/api',
    timeout:10000,
    method:'POST'
})

instance.interceptors.request.use((config)=>{
    config.headers = {
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    return config
},(err)=>{
    console.log(err)
})
instance.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return err.message
})
export default instance