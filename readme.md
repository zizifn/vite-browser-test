# package.json

For issue: https://github.com/vitejs/vite/issues/7576

In package.json I has browser felid.

```json
  "browser": {
    "./src/node": "./src/browser"
  },
```

### index.js

```javascript
import { platform } from "./node";

console.log(platform);
```

### webpack

webpack honor the browser felid. Output below, please check in dist or just run webpack in this repo.

```javascript
(() => {
  "use strict";
  console.log("browser");
})();
```

### vite

vite **NOT** honor the browser felid

```javascript
const o = "node";
console.log(o);
```
