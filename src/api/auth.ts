import { AuthResponse } from '../types/auth'
import http from '../utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
