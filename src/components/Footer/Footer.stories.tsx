import type { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {}

export default meta
