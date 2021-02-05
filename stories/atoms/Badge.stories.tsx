import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Badge, BadgeProps } from "@lib/atoms/Badge"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Badge",
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => {
  return (
    <Badge {...args} onClick={action("click")}>
      Badge
    </Badge>
  )
}

export const Basic = Template.bind({})

Basic.args = {}
