import React from "react"
import cx from "classnames"
import { Input, InputProps } from "@lib/atoms/Input"
import { useUi } from "@lib/hooks"

import "./FormInput.scss"

export type FormInputProps = InputProps & {
  label?: string
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, addonBefore, addonAfter, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("form-input")

    const wrappedClass = cx([`${prefix}__form-group`])
    const titleClass = cx([`${prefix}__title`])

    const groupClass = cx([`${prefix}__input-group`])
    const addonClass = cx([`${prefix}__addon`])

    return (
      <label className={wrappedClass}>
        {label && <span className={titleClass}>{label}</span>}
        <span className={groupClass}>
          {addonBefore && <span className={addonClass}>{addonBefore}</span>}
          <Input {...props} ref={ref} />
          {addonAfter && <span className={addonClass}>{addonAfter}</span>}
        </span>
      </label>
    )
  },
)
