import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { CheckBox, CheckBoxProps } from "@lib/atoms/CheckBox"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/CheckBox",
  component: CheckBox,
} as Meta

const Template: Story<CheckBoxProps> = (args) => {
  return (
    <>
      <CheckBox onChange={action("change")} {...args} />
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  disabled: false,
}
