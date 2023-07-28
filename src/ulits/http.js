import axios from "axios"

const instance = axios.create({
    baseURL:'',
    timeout:10000,
    method:'GET',
})

instance.interceptors.request.use(function(config){
    config.headers = {
        'X-Ayth-Token' : sessionStorage.getItem('token')
    }
    return config.headers
},function(err){
    console.log(err)
})
instance.interceptors.response.use(function(res){
    return res.data
},function(err){
    return err.message
}
)
export default instance