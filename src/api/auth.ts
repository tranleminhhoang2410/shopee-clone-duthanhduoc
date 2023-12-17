import { AuthResponse } from '../types/auth'
import http from '../utils/http'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body),
  loginAccount: (body: { email: string; password: string }) => http.post<AuthResponse>('/login', body),
  logoutAccount: () => http.post<AuthResponse>('/logout')
}

export default authApi
