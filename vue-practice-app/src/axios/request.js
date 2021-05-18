import axios from 'axios'
import router from '../router'

const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL
})

requestAxios.interceptors.response.use(null, function (error) {
    if (error.response.status) {
        router.push('/auth?message=auth')
    }

    return Promise.reject(error)
})

export default requestAxios
