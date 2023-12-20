import axios, { AxiosError } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => axios.isAxiosError(error)

export const isAxiosUnprocessableEntityError = <FormError>(error: unknown): error is AxiosError<FormError> =>
  isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity

export const formatCurrency = (currency: number) => new Intl.NumberFormat('de-DE').format(currency)

export const formatNumberToSocialStyle = (value: number) =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()

export const rateSale = (original: number, sale: number) => Math.round(((original - sale) / original) * 100) + '%'
