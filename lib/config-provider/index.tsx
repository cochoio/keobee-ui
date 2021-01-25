import React, { createContext, useContext } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/global-style"

import theme from "../style/theme"

import { DefaultTheme } from "styled-components"

export type IUiContext = {
  theme: DefaultTheme
}

export const UiContext = createContext<IUiContext>({
  theme,
})

export const UiContextProvider: React.FC = ({ children }) => {
  return (
    <UiContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <GlobalStyle />
    </UiContext.Provider>
  )
}
