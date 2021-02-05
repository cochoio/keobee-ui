import React from "react"
import cx from "classnames"
import { Transition } from "react-transition-group"
import { useUi } from "@lib/hooks"
import { Portal } from "./Portal"

import { TransitionProps } from "react-transition-group/Transition"

import "./Modal.scss"

export type ModalProps = TransitionProps & {
  open?: boolean
  node?: HTMLElement
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge"
  onClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({
  children,
  node = document.body,
  open = false,
  size = "medium",
  onClose,
  ...props
}) => {
  const { getPrefix } = useUi()

  const prefix = getPrefix("modal")

  const classes = cx([prefix])

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const _onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClose && onClose()
  }

  return (
    <>
      <Portal node={node}>
        <Transition timeout={150} in={open} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              aria-hidden={state !== "entered" && state !== "entering"}
              className={cx([classes, `${classes}--${state}`])}>
              <div
                className={cx([
                  `${prefix}--overlay`,
                  `${prefix}--overlay--${state}`,
                ])}
                onClick={_onClose}>
                <div
                  className={cx([
                    `${prefix}--content`,
                    `${prefix}--content--${state}`,
                    `${prefix}--content--${size}`,
                  ])}
                  onClick={handleContentClick}>
                  {children}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </Portal>
    </>
  )
}
