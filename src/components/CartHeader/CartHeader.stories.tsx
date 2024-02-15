import type { Meta, StoryObj } from '@storybook/react'

import CartHeader from './CartHeader'

const meta: Meta<typeof CartHeader> = {
  title: 'Components/CartHeader',
  component: CartHeader,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof CartHeader>

export const Template: Story = {}

export default meta
