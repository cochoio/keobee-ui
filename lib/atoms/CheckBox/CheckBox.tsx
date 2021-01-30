import React, { useContext, useMemo } from "react"
import { UiContext } from "@lib/config-provider"
import { CgCheck } from "react-icons/cg"
import cx from "classnames"

import "./CheckBox.scss"

export type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary"
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, id, variant = "primary", ...props }, ref) => {
    const _id = useMemo(() => {
      if (id) return id
      return (
        Math.random().toString(36).slice(2, 5) +
        Math.random().toString(36).slice(2, 5)
      )
    }, [])

    const { getPrefix } = useContext(UiContext)
    const prefixClass = getPrefix("checkbox")

    const _className = cx(prefixClass, `${prefixClass}__${variant}`, [
      `${prefixClass}`,
      className,
    ])

    return (
      <label htmlFor={_id} className={_className}>
        <input ref={ref} type="checkbox" id={_id} {...props} />
        <span>
          <CgCheck />
        </span>
      </label>
    )
  },
)
