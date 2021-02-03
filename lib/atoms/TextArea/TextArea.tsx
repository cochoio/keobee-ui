import React from "react"
import cx from "classnames"

import "./TextArea.scss"
import { useUi } from "@lib/hooks"

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: "primary"
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const { getPrefix } = useUi()
    const prefixClass = getPrefix("textarea")

    const _className = cx(prefixClass, [
      `${prefixClass}--${variant}`,
      className,
    ])

    return <textarea className={_className} ref={ref} {...props} />
  },
)
