import React from "react"
import cx from "classnames"

import { useUi } from "@lib/hooks"

import "./ButtonGroup.scss"

export type ButtonGroupProps = React.AllHTMLAttributes<HTMLDivElement> & {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefixClass = getPrefix("button-group")

    const _className = cx(prefixClass, [className])

    return (
      <div className={_className} ref={ref}>
        {children}
      </div>
    )
  },
)
