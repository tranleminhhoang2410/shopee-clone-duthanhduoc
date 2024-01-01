import { Category } from '@/types/category'
import { SuccessResponse } from '@/types/utils'
import http from '@/utils/http'

const URL = 'categories'

const categoryApi = {
  getCategories: () => http.get<SuccessResponse<Category[]>>(URL)
}

export default categoryApi
