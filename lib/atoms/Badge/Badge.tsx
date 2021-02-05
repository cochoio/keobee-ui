import React, { HTMLAttributes } from "react"
import cx from "classnames"
import { useUi } from "@lib/hooks"

import "./Badge.scss"

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "primary" | "disabled"
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("badge")

    const classes = cx([prefix, className, `${prefix}--${variant}`])

    return (
      <span {...props} className={classes} ref={ref}>
        {children}
      </span>
    )
  },
)
