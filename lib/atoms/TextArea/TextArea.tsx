import React, { useContext } from "react"
import cx from "classnames"

import { UiContext } from "@lib/config-provider"
import "./TextArea.scss"

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: "primary"
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const { getPrefix } = useContext(UiContext)
    const prefixClass = getPrefix("textarea")

    const _className = cx(prefixClass, [
      `${prefixClass}--${variant}`,
      className,
    ])

    return <textarea className={_className} ref={ref} {...props} />
  },
)
