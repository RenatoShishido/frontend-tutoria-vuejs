import axios from 'axios'

const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

const session = JSON.parse(sessionStorage.getItem('vue-session-key'))

const AUTH_TOKEN = `Bearer ${session.jwt}`


AXIOS_INSTANCE.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export default AXIOS_INSTANCE
