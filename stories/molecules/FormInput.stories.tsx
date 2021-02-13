import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { FormInput, FormInputProps } from "@lib/molecules/FormInput"
import { Select } from "@lib/atoms/Select"

const { Option } = Select

export default {
  title: "@molecules/Form/FormInput",
  component: FormInput,
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "text",
      },
    },
    placeholder: {
      name: "placeholder",
      control: {
        type: "text",
      },
    },
    addonBefore: {
      name: "addonBefore",
      control: {
        type: "object",
      },
    },
    addonAfter: {
      name: "addonAfter",
      control: {
        type: "object",
      },
    },
  },
} as Meta

const Template: Story<FormInputProps> = (args) => {
  return (
    <>
      <FormInput {...args} />
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  disabled: true,
  label: "아흐흐흐흐",
  placeholder: "domain",
  addonBefore: "http://",
  addonAfter: ".com",
}
