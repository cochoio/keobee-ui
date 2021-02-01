import React from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"
import { RadioButton } from "./RadioButton"

import "./Radio.scss"

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary"
  name?: string
  label?: JSX.Element | string
}

const _Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("radio")

    const _className = cx([prefix], {})

    return (
      <label className={_className}>
        <input type="radio" {...props} ref={ref} />
        <span />
      </label>
    )
  },
)

export const Radio = Object.assign(_Radio, {
  Button: RadioButton,
})
