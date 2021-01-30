import React from "react"
import cx from "classnames"
import { PanelHeader } from "./Panel.Header"
import { PanelBody } from "./Panel.Body"

import { useUi } from "@lib/hooks"

import "./Panel.scss"

export type PanelProps = React.AllHTMLAttributes<HTMLDivElement> & {}

export const _Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ children, className, ...props }, ref) => {
    const { getPrefix } = useUi()
    const _children = React.Children.toArray(children)

    const prefix = getPrefix("panel")

    const _className = cx(prefix, className)

    return (
      <article ref={ref} className={_className} {...props}>
        {_children}
      </article>
    )
  },
)

export const Panel = Object.assign(_Panel, {
  Header: PanelHeader,
  Body: PanelBody,
})
