import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Input, InputProps } from "@lib/atoms/Input"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Input",
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => {
  return <Input onChange={action("change")} />
}

export const Default = Template.bind({})

Default.args = {}
