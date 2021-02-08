import React, { useRef } from "react"
import ReactDOM from "react-dom"
import { useUi } from "@lib/hooks"
import { Input } from "@lib/atoms/Input"
import cx from "classnames"

import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker"

import { getYear, getMonth, isSunday } from "date-fns"

import "react-datepicker/dist/react-datepicker.css"
import "./DatePicker.scss"

import { ko } from "date-fns/locale"

export type DatePickerProps = ReactDatePickerProps & {
  dateFormat?: string
  onCalendarOpen?: () => void
  onCalendarClose?: () => void
  disabled?: boolean
}

export const DatePicker = React.forwardRef<ReactDatePicker, DatePickerProps>(
  (
    {
      className,
      popperPlacement = "top-start",
      dateFormat = "yyyy.MM.dd (eee)",
      onCalendarOpen,
      onCalendarClose,
      disabled = false,
      minDate,
      maxDate,
      ...props
    },
    ref,
  ) => {
    const { getPrefix } = useUi()
    const prefixClass = getPrefix("datepicker")
    const calendarClassName = getPrefix("calednar")

    const _className = cx(prefixClass, [className])

    registerLocale("ko", ko)

    return (
      <ReactDatePicker
        className={_className}
        ref={ref}
        calendarClassName={calendarClassName}
        popperPlacement={popperPlacement}
        customInput={<Input />}
        locale="ko"
        dayClassName={(date) => (isSunday(date) ? "sunday" : null)}
        useWeekdaysShort={true}
        dateFormat={!dateFormat ? "yyyy.MM.dd (eee)" : dateFormat}
        onCalendarOpen={onCalendarOpen}
        onCalendarClose={onCalendarClose}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => {
          return (
            <>
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}>
                <button
                  className="btn_month btn_month-prev"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}></button>
                <div className="month-day">
                  {getYear(date)}.{getMonth(date) + 1}
                </div>

                <button
                  className="btn_month btn_month-next"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}></button>
              </div>
            </>
          )
        }}
        {...props}
      />
    )
  },
)
