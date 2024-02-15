import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof Header>

export const Default: Story = {}

export default meta
