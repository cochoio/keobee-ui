import React from "react"
import { UiContextProvider } from "@lib/config-provider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <UiContextProvider>
      <Story />
    </UiContextProvider>
  ),
]
