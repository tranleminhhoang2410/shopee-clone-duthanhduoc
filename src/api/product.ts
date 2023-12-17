import { Product, ProductList, ProductListConfig } from '../types/product'
import { SuccessResponse } from '../types/utils'
import http from '../utils/http'

const URL = 'products'

const productApi = {
  getProducts: (params: ProductListConfig) => http.get<SuccessResponse<ProductList>>(URL, { params }),
  getProductDetails: (id: string) => http.get<SuccessResponse<Product>>(`${URL}/${id}`)
}

export default productApi
