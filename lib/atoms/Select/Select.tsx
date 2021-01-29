import React, { SelectHTMLAttributes } from "react"
import { OptGroup } from "./OptGroup"
import { Option } from "./Option"

import s from "./Select.module.scss"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {}

const _Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <select className={s.select} ref={ref}>
        {children}
      </select>
    )
  },
)

export const Select = Object.assign(_Select, {
  Option,
  OptGroup,
})
