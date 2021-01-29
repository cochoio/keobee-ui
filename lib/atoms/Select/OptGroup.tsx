import React from "react"

export type OptGroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement> & {}

export const OptGroup = React.forwardRef<HTMLOptGroupElement, OptGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <optgroup ref={ref} {...props}>
        {children}
      </optgroup>
    )
  },
)
