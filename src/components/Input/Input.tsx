/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm'
}: InputProps) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...registerResult}
      />
      <span className={classNameError}>{errorMessage}</span>
    </div>
  )
}
