import React from "react"
import { UiContextProvider } from "@lib/config-provider"

import "../lib/style/index.scss"

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
