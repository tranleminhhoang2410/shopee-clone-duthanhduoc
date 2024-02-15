import type { Meta, StoryObj } from '@storybook/react'

import ProductRating from './ProductRating'

const meta: Meta<typeof ProductRating> = {
  title: 'Components/ProductRating',
  component: ProductRating,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof ProductRating>

export const Active: Story = {
  args: {
    rating: 5,
    activeClassname: 'w-3 h-3 fill-yellow-300 text-yellow-300'
  }
}

export const NonActive: Story = {
  args: {
    rating: 0,
    nonActiveClassname: 'w-3 h-3 fill-current text-gray-300'
  }
}

export default meta
