import React from "react"
import cx from "classnames"
import { useUi } from "@lib/hooks"

import "./Panel.scss"

export type PanelHeaderProps = React.AllHTMLAttributes<HTMLDivElement> & {}

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("panel-header")

    const _className = cx(prefix)

    return (
      <div className={_className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
