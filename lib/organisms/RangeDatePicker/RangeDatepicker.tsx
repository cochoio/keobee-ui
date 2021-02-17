import React from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"

import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker"
import { DatePicker, DatePickerProps } from "@lib/organisms/DatePicker"

import { format } from "date-fns"

import "react-datepicker/dist/react-datepicker.css"
import "./RangeDatePicker.scss"

export type RangeDatePickerProps = DatePickerProps & {}

export const RangeDatePicker = React.forwardRef<
  ReactDatePicker,
  RangeDatePickerProps
>(({ className, startDate, endDate, ...props }, ref) => {
  const { getPrefix } = useUi()
  const prefixClass = getPrefix("rangeDatepicker")

  const _className = cx(prefixClass, [className])

  const RangeInput = ({ onClick }: any) => {
    return (
      <button className="range-input" onClick={onClick}>
        {startDate && format(startDate, "yyyy.MM.dd")} -
        {!endDate
          ? format(new Date(), "yyyy.MM.dd")
          : format(endDate, "yyyy.MM.dd")}
      </button>
    )
  }

  return (
    <>
      <DatePicker
        className={_className}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        selectsRange
        customInput={<RangeInput />}
        ref={ref}
        {...props}
      />
    </>
  )
})
