import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import omit from 'lodash/omit'
import { schema, Schema } from '@/utils/validation'
import Input from '@/components/Input'
import authApi from '@/api/auth'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'
import { ErrorResponse } from '@/types/utils'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import Button from '@/components/Button'
// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }
type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) })
  const { registerAccount } = authApi

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/login')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
          // if (formError?.email)
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // if (formError?.password)
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   })
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <span className='text-2xl'>Đăng Ký</span>
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
              <Input
                name='confirm_password'
                type='password'
                register={register}
                placeholder='Confirm Password'
                className='mt-2 flex flex-col'
                errorMessage={errors.confirm_password?.message}
                autoComplete='on'
              />
              <div className='mt-2'>
                <Button
                  isLoading={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                  type='submit'
                  className='flex w-full items-center justify-center bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng ký
                </Button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-gray-300'>Bạn đã có tài khoản?</span>
                <Link className='ml-2 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
