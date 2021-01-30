# keobee-ui

React Admin Template UI

![UI Component Build](https://github.com/linkube-team/keobee-ui/workflows/UI%20Component%20Build/badge.svg)
![dev test](https://github.com/linkube-team/keobee-ui/workflows/dev%20test/badge.svg)

## Getting Start

_yarn_

```
npm i keobee-ui
// or
yarn add keobee-ui
```

```tsx
import { UiContextProvider } from "keobee-ui"

import "keobee-ui/index.css"

const MyApp = () => {
  return (
    <UiContextProvider>
      <App />
    </UiContextProvider>
  )
}

export default MyApp
```
