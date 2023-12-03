import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import { loginSchema, LoginSchema } from '../../utils/validation'
import Input from '../../components/Input'
import { loginAccount } from '../../api/auth'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import Button from '../../components/Button'

type FormData = LoginSchema
export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <span className='text-2xl'>Đăng Nhập</span>
              <Input
                name='email'
                type='email'
                register={register}
                placeholder='Email'
                errorMessage={errors.email?.message}
                className='mt-8 flex flex-col'
              />
              <Input
                name='password'
                type='password'
                register={register}
                placeholder='Password'
                className='mt-2 flex flex-col'
                errorMessage={errors.password?.message}
                autoComplete='on'
              />
              <div className='mt-3'>
                <Button
                  isLoading={loginAccountMutation.isPending}
                  disabled={loginAccountMutation.isPending}
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='flex item-center justify-center mt-8'>
                <span className='text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400 ml-2' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
