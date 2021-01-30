import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Select, SelectProps } from "@lib/atoms/Select"
import { action } from "@storybook/addon-actions"

export default {
  title: "@atoms/Select",
  component: Select,
  subcomponents: {
    Option: Select.Option,
    OptGroup: Select.OptGroup,
  },
} as Meta

const Template: Story<SelectProps> = (args) => {
  return (
    <>
      <Select>
        <Select.OptGroup label="colors">
          <Select.Option>red</Select.Option>
          <Select.Option>blue</Select.Option>
          <Select.Option>green</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="size">
          <Select.Option>small</Select.Option>
          <Select.Option>medium</Select.Option>
          <Select.Option>large</Select.Option>
        </Select.OptGroup>
      </Select>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
