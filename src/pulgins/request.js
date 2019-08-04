import axios from 'axios'

const options = {
  baseURL: 'http://localhost:3000',
  timeout: 10000
}

const request = axios.create(options)

request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 1) {
      console.log(res)
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export { request }
