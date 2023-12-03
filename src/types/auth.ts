import { User } from './user'
import { SuccessResponse } from './utils'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
