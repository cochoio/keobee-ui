import { css, DefaultTheme } from "styled-components"

export type ColorTypes =
  | "primary"
  | "secondary"
  | "dark"
  | "lightDark"
  | "lightGray"
  | "border"
  | "disabled"
declare module "styled-components" {
  type Colors = {
    [type in ColorTypes]: string
  }

  interface Sizes {
    container: string
    appbar: number
    sidebar: number
    sizeSpacing: (xsize: number) => ReturnType<typeof css>
  }

  interface Mixins {
    textEllipsis: (line: number) => ReturnType<typeof css>
  }

  export interface DefaultTheme {
    colors: Colors
    sizes: Sizes
    mixins: Mixins
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#6b90dc",
    secondary: "#697185",
    dark: "#333",
    lightDark: "#666",
    lightGray: "#e6e6e6",
    border: "#dae1e6",
    disabled: "#6c757d65",
  },
  sizes: {
    container: "1220px",
    appbar: 55,
    sidebar: 210,
    sizeSpacing: (xsize = 1) => {
      const ptb = 5 + (xsize - 1) // 7, 8, 9, ...
      const plr = 8 + (4 * xsize - 4) // 14, 18, 22, ...
      const fontSize = 0.8 + (0.2 * xsize - 0.2) // 1.0, 1.2, 1.4, 1.6 ...

      return css`
        padding: ${ptb}px ${plr}px;
        font-size: ${fontSize}rem;
      `
    },
  },
  mixins: {
    textEllipsis: (line) => css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: line;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      line-height: 1.2em;
      height: ${line * 1.2}em;
    `,
  },
}

export default theme
