import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Radio, RadioProps } from "@lib/atoms/Radio"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Radio",
  component: Radio,
  subcomponents: {
    "Radio.Button": Radio.Button,
  },
} as Meta

const Template: Story<RadioProps> = (args) => {
  return (
    <>
      <Radio onChange={action("change")} name="color" label="color-pink" />
      <Radio onChange={action("change")} name="color" label="color-red" />
      <hr />
      <Radio onChange={action("change")} name="size" label="size-big" />
      <Radio onChange={action("change")} name="size" label="size-small" />
      <hr />
      <Radio.Button name="gender" onChange={action("change")}>
        Gender: 남성
      </Radio.Button>
      <Radio.Button name="gender" onChange={action("change")}>
        Gender: 여성
      </Radio.Button>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
