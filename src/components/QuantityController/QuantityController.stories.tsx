import type { Meta, StoryObj } from '@storybook/react'

import QuantityController from './QuantityController'

const meta: Meta<typeof QuantityController> = {
  title: 'Components/QuantityController',
  component: QuantityController,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof QuantityController>

export const Template: Story = {
  args: {}
}

export default meta
