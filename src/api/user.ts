import { User } from '@/types/user'
import { SuccessResponse } from '@/types/utils'
import http from '@/utils/http'

interface BodyUpdateProfile extends Omit<User, '_id' | 'role' | 'createdAt' | 'updatedAt' | 'email'> {
  password: string
  newPassword: string
}

const userApi = {
  getProfile() {
    return http.get<SuccessResponse<User>>('me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put<SuccessResponse<User>>('user', body)
  },
  uploadAvatar(body: FormData) {
    return http.post<SuccessResponse<string>>('user/upload-avatar', body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

export default userApi
