import axios from 'axios'
require('dotenv/config')

const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.API_URL
})

const AUTH_TOKEN = `Bearer ${localStorage.getItem('jwt')}`

AXIOS_INSTANCE.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export default AXIOS_INSTANCE
