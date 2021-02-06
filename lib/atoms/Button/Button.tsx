import React from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"

import "./Button.scss"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "success" | "danger" | "warning"
  size?: "small" | "medium" | "large" | "xlarge"
  disabled?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      type = "button",
      disabled = false,
      size = "medium",
      className,
      ...rest
    },
    ref,
  ) => {
    const { getPrefix } = useUi()

    const prefixClass = getPrefix("button")

    const _className = cx(prefixClass, [
      `${prefixClass}--${variant}`,
      className,
    ])

    return (
      <button ref={ref} disabled={disabled} {...rest} className={_className}>
        {children}
      </button>
    )
  },
)
