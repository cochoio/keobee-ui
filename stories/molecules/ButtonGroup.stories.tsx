import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { ButtonGroup, ButtonGroupProps } from "@lib/molecules/ButtonGroup"
import { Button } from "@lib/atoms/Button"
import { action } from "@storybook/addon-actions"

export default {
  title: "@molecules/ButtonGroup",
  component: ButtonGroup,
} as Meta

const Template: Story<ButtonGroupProps> = (args) => {
  return (
    <>
      <ButtonGroup>
        <Button>red</Button>
        <Button>blue</Button>
        <Button>yellow</Button>
      </ButtonGroup>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
