---
to: tsconfig.json
---
{
  "compilerOptions": {
    "noImplicitAny": false,
    "outDir": "dist",
    "baseUrl": "./src",
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "isolatedModules": true,
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "types": ["vite/client", "@types/jest", "vite-plugin-svg-icons/client"],
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"],
    "skipLibCheck": true,
    "declaration": true
  },
  "include": [
    "env.d.ts", "src/index.ts", "src/nuxt/**/*.ts", "src/tokens/**/*.ts", "src/tokens/**/*.json", "src/scripts/**/*.ts"
  ],
  "exclude": ["src/components/global/stories/*"]
}
