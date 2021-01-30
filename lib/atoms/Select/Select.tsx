import React, { SelectHTMLAttributes, useContext } from "react"
import cx from "classnames"
import { UiContext } from "@lib/config-provider"

import { OptGroup } from "./OptGroup"
import { Option } from "./Option"

import "./Select.scss"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {}

const _Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, ...props }, ref) => {
    const { getPrefix } = useContext(UiContext)
    const prefixClass = getPrefix("select")

    const _className = cx(prefixClass, [className])

    return (
      <select className={_className} ref={ref}>
        {children}
      </select>
    )
  },
)

export const Select = Object.assign(_Select, {
  Option,
  OptGroup,
})
