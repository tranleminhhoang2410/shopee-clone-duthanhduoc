import type { Meta, StoryObj } from '@storybook/react'

import Fallback from './Fallback'

const meta: Meta<typeof Fallback> = {
  title: 'Components/Fallback',
  component: Fallback,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof Fallback>

export const Default: Story = {}

export default meta
