import React from "react"
import cx from "classnames"
import { useUi } from "@lib/hooks"

import "./Panel.scss"

export type PanelBodyProps = React.AllHTMLAttributes<HTMLDivElement> & {}

export const PanelBody = React.forwardRef<HTMLDivElement, PanelBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { getPrefix } = useUi()

    const prefix = getPrefix("panel-body")

    const _className = cx(prefix)

    return (
      <div className={_className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
