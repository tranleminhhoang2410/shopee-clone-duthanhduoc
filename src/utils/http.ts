/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/httpStatusCode'
import { AuthResponse } from '../types/auth'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from './auth'
import path from '../constants/path'

let accessToken: string = getAccessTokenFromLS()

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const { url } = response.config
    if (url === path.login || url === path.register) {
      const data = response.data as AuthResponse
      accessToken = data.data.access_token
      setAccessTokenToLS(accessToken)
      setProfileToLS(data.data.user)
    } else if (url === path.logout) {
      accessToken = ''
      clearLS()
    }
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      const data: any | undefined = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    return Promise.reject(error)
  }
)

export default instance
