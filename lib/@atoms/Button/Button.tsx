import React from "react"
import styled, { css } from "styled-components"
import { ColorTypes } from "@lib/style/theme"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ColorTypes
  size?: "small" | "medium" | "large" | "xlarge"
  disabled?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  border: 0;
  color: #ffffff;
  padding: 7px 14px;
  cursor: pointer;
  vertical-align: middle;
  font-weight: 400;

  background-color: ${(props) =>
  props.theme.colors[props.variant || "primary"]};
  ${({ size, theme }) => {
  if (size === "small") {
    return theme.sizes.sizeSpacing(0)
  } else if (size === "medium") {
    return theme.sizes.sizeSpacing(2)
  } else if (size === "large") {
    return theme.sizes.sizeSpacing(4)
  } else if (size === "xlarge") {
    return theme.sizes.sizeSpacing(8)
  } else theme.sizes.sizeSpacing(2)
}};

  ${({ disabled }) =>
  disabled &&
  css`
      background-color: ${(props) => props.theme.colors["disabled"]} !important;
      cursor: not-allowed !important;
    `}
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      type = "button",
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled}
        {...rest}>
        {children}
      </StyledButton>
    )
  },
)
