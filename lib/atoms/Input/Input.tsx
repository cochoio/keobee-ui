import React, { useContext } from "react"
import cx from "classnames"

import "./Input.scss"
import { UiContext } from "@lib/config-provider"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "text" | "password" | "email"
  variant?: "primary"
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const { getPrefix } = useContext(UiContext)
    const prefixClass = getPrefix("input")

    const _className = cx(prefixClass, [
      `${prefixClass}--${variant}`,
      className,
    ])

    return <input {...props} className={_className} ref={ref} />
  },
)
