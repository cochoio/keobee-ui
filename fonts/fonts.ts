import { css } from "styled-components"
import NanumGothicLightWoff2 from "./NanumGothicLight.woff2"
import NanumGothicLightWoff from "./NanumGothicLight.woff"
import NanumGothicWoff2 from "./NanumGothic.woff2"
import NanumGothicWoff from "./NanumGothic.woff"
import NanumGothicBoldWoff2 from "./NanumGothicBold.woff2"
import NanumGothicBoldWoff from "./NanumGothicBold.woff"
import NanumGothicExtraBoldWoff2 from "./NanumGothicExtraBold.woff2"
import NanumGothicExtraBoldWoff from "./NanumGothicExtraBold.woff"

const FontStyleSheet = css`
  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicLightWoff}) format("woff"),
      url(${NanumGothicLightWoff2}) format("woff2");
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicWoff}) format("woff"),
      url(${NanumGothicWoff2}) format("woff2");
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicBoldWoff2}) format("woff2"),
      url(${NanumGothicBoldWoff}) format("woff");
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicExtraBoldWoff}) format("woff"),
      url(${NanumGothicExtraBoldWoff2}) format("woff2");
    font-weight: 800;
    font-display: swap;
  }
`

export default FontStyleSheet
