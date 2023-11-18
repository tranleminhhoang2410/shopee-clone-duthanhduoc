import axios, { AxiosError } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => axios.isAxiosError(error)

export const isAxiosUnprocessableEntityError = <FormError>(error: unknown): error is AxiosError<FormError> =>
  isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
