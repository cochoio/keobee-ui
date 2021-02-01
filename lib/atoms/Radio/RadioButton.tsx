import React from "react"
import cx from "classnames"
import { useUi } from "@lib/hooks"

import "./RadioButton.scss"

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, className, checked, ...rest }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("RadioButton")

    const _className = cx([prefix, className])

    return (
      <label className={_className}>
        <input type="radio" {...rest} ref={ref} />
        <span>{children}</span>
      </label>
    )
  },
)
