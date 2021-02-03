import React, { useContext } from "react"
import cx from "classnames"

import "./TextArea.scss"
import { UiContext } from "@lib/config-provider"

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  type?: "text"
  variant?: "primary"
  disabled?: boolean
  placeholder?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, variant = "primary", disabled = false, placeholder, ...props },
    ref,
  ) => {
    const { getPrefix } = useContext(UiContext)
    const prefixClass = getPrefix("textarea")

    const _className = cx(prefixClass, [
      `${prefixClass}--${variant}`,
      className,
    ])

    return (
      <textarea
        {...props}
        className={_className}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
      />
    )
  },
)
