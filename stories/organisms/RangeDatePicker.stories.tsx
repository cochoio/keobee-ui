import React, { useState, useEffect } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {
  RangeDatePicker,
  RangeDatePickerProps,
} from "@lib/organisms//RangeDatePicker"
import { action } from "@storybook/addon-actions"

export default {
  title: "@organisms/Date/RangeDatePicker",
  component: RangeDatePicker,
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

const Template: Story<RangeDatePickerProps> = (args) => {
  const [startDate, setStartDate] = useState(args.selected)
  const [endDate, setEndDate] = useState(null)
  // const onChange_start = (date: Date | [Date, Date]) => {
  //   setStartDate(date as Date)
  // }
  // const onChange_end = (date: Date | [Date, Date]) => {
  //   setEndDate(date as Date)
  // }

  const onChange = (dates: [any, any]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  useEffect(() => {
    action("change")(startDate)
  }, [startDate])
  useEffect(() => {
    action("change")(endDate)
  }, [endDate])
  return (
    <RangeDatePicker
      {...args}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      onChange={onChange}
    />
  )
}

export const Basic = Template.bind({})

Basic.args = {
  selected: new Date(),
  onCalendarOpen: () => null,
  onCalendarClose: () => null,
  disabled: false,
}
