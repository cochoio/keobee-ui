import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Radio, RadioProps } from "@lib/atoms/Radio"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Radio",
  component: Radio,
} as Meta

const Template: Story<RadioProps> = (args) => {
  return (
    <>
      <Radio onChange={action("change")} name="color" label="color-pink" />
      <Radio onChange={action("change")} name="color" label="color-red" />
      <hr />
      <Radio onChange={action("change")} name="size" label="size-big" />
      <Radio onChange={action("change")} name="size" label="size-small" />
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
