import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ],
  argTypes: {
    isLoading: {
      description: 'Hiển thị icon loading'
    },
    children: {
      description: 'Nội dung button',
      table: { type: { summary: 'React.ReactNode' }, defaultValue: { summary: '' } }
    },
    className: {
      description: 'class',
      table: { type: { summary: 'string' }, defaultValue: { summary: '' } }
    }
  }
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Đăng nhập',
    className: 'flex items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
    isLoading: false
  }
}

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Đăng ký',
    className:
      'inline-flex items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
    disabled: true
  }
}

export default meta
