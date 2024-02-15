import type { Meta, StoryObj } from '@storybook/react'

import RegisterHeader from './RegisterHeader'

const meta: Meta<typeof RegisterHeader> = {
  title: 'Components/RegisterHeader',
  component: RegisterHeader,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof RegisterHeader>

export const Default: Story = {}

export default meta
