import axios from 'axios'

const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const TOKEN = localStorage.getItem('token')

AXIOS_INSTANCE.defaults.headers.common['Authorization'] = 'Bearer ' + TOKEN

export default AXIOS_INSTANCE
