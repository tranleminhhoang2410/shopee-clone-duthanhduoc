import { User } from './user'
import { ResponseApi } from './utils'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
