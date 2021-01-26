import React, { createContext, useContext } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/global-style"

import theme from "../style/theme"

import { DefaultTheme } from "styled-components"

export type IUiContext = {
  theme: DefaultTheme
  ns?: string
}

export const UiContext = createContext<IUiContext>({
  theme,
  ns: "kb",
})

export const UiContextProvider: React.FC = ({ children }) => {
  const defaultConfig = {
    theme,
    ns: "kb",
  }
  return (
    <UiContext.Provider value={defaultConfig}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <GlobalStyle />
    </UiContext.Provider>
  )
}
