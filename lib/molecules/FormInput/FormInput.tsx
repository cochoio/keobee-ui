import React from "react"
import cx from "classnames"
import { Input, InputProps } from "@lib/atoms/Input"
import { useUi } from "@lib/hooks"

import "./FormInput.scss"

export type FormInputProps = InputProps & {
  label?: string
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ children, label, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("form-input")

    const wrappedClass = cx([`${prefix}__form-group`])
    const titleClass = cx([`${prefix}__title`])

    return (
      <label className={wrappedClass}>
        <span className={titleClass}>{label}</span>
        <Input {...props} ref={ref} />
      </label>
    )
  },
)
