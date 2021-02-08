import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Input, InputProps } from "@lib/atoms/Input"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Input",
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => {
  return <Input onChange={action("change")} {...args} />
}

export const Basic = Template.bind({})

Basic.args = {
  disabled: false,
  placeholder: "entered input...",
  value: "",
}
