import React from "react"

export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {}

export const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} {...props}>
        {children}
      </option>
    )
  },
)
