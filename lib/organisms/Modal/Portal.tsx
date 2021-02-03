import React, { useEffect } from "react"
import ReactDOM from "react-dom"

export type PortalProps = {
  node: HTMLElement
}

export const Portal: React.FC<PortalProps> = ({ children, node }) => {
  return ReactDOM.createPortal(children, node)
}
