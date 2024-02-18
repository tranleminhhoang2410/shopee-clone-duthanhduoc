import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Tên đăng nhập',
    classNameError: 'flex items-center py-4 px-2 text-sm text-orange',
    errorMessage: 'Tên đăng nhập không được để trống'
  }
}

export default meta
