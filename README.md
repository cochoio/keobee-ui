# keobee-ui

React Admin Template UI

![UI Component Build](https://github.com/linkube-team/keobee-ui/workflows/UI%20Component%20Build/badge.svg)
![dev test](https://github.com/linkube-team/keobee-ui/workflows/dev%20test/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e1d36418-7aaa-4781-981f-bed4d44081bf/deploy-status)](https://app.netlify.com/sites/keobee-ui/deploys)

## Getting Start

[Demo](https://keobee-ui.netlify.app/)

_yarn_

```
npm i keobee-ui
// or
yarn add keobee-ui
```

```tsx
import React from "react"
import ReactDOM from "react-dom"
import { UiContextProvider } from "keobee-ui"

import "keobee-ui/index.css"

const MyApp = () => {
  return (
    <UiContextProvider>
      <App />
    </UiContextProvider>
  )
}

ReactDOM.render(<MyApp />, document.getElementById("myapp"))
```

## License

[MIT](./LICENSE)
