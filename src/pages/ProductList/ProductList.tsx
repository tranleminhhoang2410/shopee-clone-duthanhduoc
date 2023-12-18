import { useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import Product from './Product'
import SortProductList from './SortProductList'
import useQueryParams from '../../hooks/useQueryParams'
import productApi from '../../api/product'

export default function ProductList() {
  const queryParams = useQueryParams()
  const { getProducts } = productApi
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return getProducts(queryParams)
    }
  })
  console.log(data)

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {data?.data.data.products
                .map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product}/>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
