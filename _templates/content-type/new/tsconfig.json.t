---
to: packages/ripple-tide-<%= h.changeCase.paramCase(name) %>/tsconfig.json
---

{
  "extends": "../../tsconfig.build.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "noImplicitAny": false,
    "declaration": false,
    "jsx": "preserve",
    "sourceMap": true,
    "paths": {
      "@dpc-sdp/ripple-tide-api": ["./../ripple-tide-api/dist/index.js"]
    }
  },
  "include": ["./src"]
}
