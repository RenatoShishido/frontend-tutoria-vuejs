import axios from 'axios'

const token = `Bearer ${localStorage.getItem('jwt')}`

console.log(token)

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [function (data, headers) {
    headers['Authorization'] = token
    return JSON.stringify(data)
  }],
  headers: {
    'Content-Type': 'application/json'
  }
})
