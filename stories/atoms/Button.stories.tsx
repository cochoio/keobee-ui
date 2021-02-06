import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Button, ButtonProps } from "@lib/atoms/Button"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} onClick={action("click")}>
      Button
    </Button>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  disabled: false,
  variant: "primary",
}

export const Danger = Template.bind({})

Danger.args = {
  variant: "danger",
}

export const Success = Template.bind({})

Success.args = {
  variant: "success",
}
