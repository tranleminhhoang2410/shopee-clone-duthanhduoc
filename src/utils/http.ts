import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
