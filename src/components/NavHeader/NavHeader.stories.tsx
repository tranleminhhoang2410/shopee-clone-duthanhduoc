import type { Meta, StoryObj } from '@storybook/react'

import NavHeader from './NavHeader'

const meta: Meta<typeof NavHeader> = {
  title: 'Components/NavHeader',
  component: NavHeader,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof NavHeader>

export const Default: Story = {}

export default meta
