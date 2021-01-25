import { useContext } from "react"
import { UiContext } from "./config-provider"

export const useUi = () => {
  const context = useContext(UiContext)

  return context
}
