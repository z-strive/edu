import axios from "axios"

const instance = axios.create({
    baseURL:'',
    timeout:10000,
    method:'GET' | 'POST',
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