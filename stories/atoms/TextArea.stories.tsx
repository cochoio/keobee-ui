import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { TextArea, TextAreaProps } from "@lib/atoms/TextArea"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/TextArea",
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => {
  return (
    <TextArea {...args} onChange={action("change")} onClick={action("click")} />
  )
}

export const Basic = Template.bind({})

Basic.args = {
  disabled: false,
  placeholder: "Leave your comment.",
  value: "",
}
