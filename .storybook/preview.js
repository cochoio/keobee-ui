import React from "react"
import { Provider } from "@lib/config-provider"

import "../lib/style/index.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
]
