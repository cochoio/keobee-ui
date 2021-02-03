import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import cx from "classnames"
import { useUi } from "@lib/hooks"
import { Portal } from "./Portal"

import "./Modal.scss"

export type ModalProps = {
  open?: boolean
  node?: HTMLElement
}

export const Modal: React.FC<ModalProps> = ({
  children,
  node = document.body,
  open = false,
  ...props
}) => {
  const { getPrefix } = useUi()

  const prefix = getPrefix("modal")

  const classes = cx([prefix])
  const overlayClass = cx([`${prefix}--overlay`])
  const contentClass = cx([`${prefix}--content`], { open })

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log("click")
  }

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("content click")
  }

  return (
    <Portal node={node}>
      <div className={classes} aria-hidden={!open}>
        <div className={overlayClass} onClick={handleClick}>
          <div className={contentClass} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
