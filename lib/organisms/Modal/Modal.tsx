import React, { useState } from "react"
import cx from "classnames"
import {
  Transition,
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group"
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
  const [appear, setAppear] = useState(false)

  const prefix = getPrefix("modal")

  const rootClass = cx(`${prefix}-root`, {
    appear,
  })

  const overlayClass = cx(`${prefix}--overlay`)
  const containerClass = cx(
    `${prefix}--container`,
    `${prefix}--container--${size}`,
  )
  const _onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClose && onClose()
  }

  const handleEnter = () => {
    setTimeout(() => setAppear(true), 0)

    window.addEventListener("keydown", _handleESCKeyPress, false)
  }

  const handleExiting = () => {
    setAppear(false)
    window.removeEventListener("keydown", _handleESCKeyPress, false)
  }

  const _handleESCKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      _onClose(e as any)
    }
  }

  return (
    <>
      <Portal node={node}>
        <CSSTransition
          onExiting={handleExiting}
          onEnter={handleEnter}
          timeout={100}
          in={open}
          mountOnEnter
          unmountOnExit>
          <div className={rootClass}>
            <div className={overlayClass} onClick={_onClose} />
            <div className={containerClass}>{children}</div>
          </div>
        </CSSTransition>
      </Portal>
    </>
  )
}
