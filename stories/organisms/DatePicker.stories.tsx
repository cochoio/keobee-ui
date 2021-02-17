import React, { useState, useEffect } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { DatePicker, DatePickerProps } from "@lib/organisms/DatePicker"
import { action } from "@storybook/addon-actions"

export default {
  title: "@organisms/Date/DatePicker",
  component: DatePicker,
  argTypes: {
    selected: {
      defaultValue: new Date(),
      control: {
        type: "date",
      },
    },
    minDate: {
      defaultValue: new Date(),
      control: {
        type: "date",
      },
    },
    maxDate: {
      control: {
        type: "date",
      },
    },
  },
} as Meta

const Template: Story<DatePickerProps> = (args) => {
  const [date, setDate] = useState(args.selected)

  const onChange = (date: Date | [Date, Date]) => {
    setDate(date as Date)
  }

  useEffect(() => {
    action("change")(date)
  }, [date])
  return (
    <>
      <DatePicker {...args} onChange={onChange} selected={date} />
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  selected: new Date(),
  dateFormat: "yyyy.MM.dd (eee)",
  onCalendarOpen: () => null,
  onCalendarClose: () => null,
  disabled: false,
}
