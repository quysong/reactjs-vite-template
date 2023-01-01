## It uses

- Vite
- TypeScript
- ESLint
- Prettier
- React Router
- Scoped SCSS

## Start the development server
`yarn install --frozen-lockfile`

`yarn dev` or `npm run dev`

## Build the distributable
For production:

`yarn build` or `npm run build`

For production:

`yarn build` or `npm run build`

## Serve the distributable

`yarn preview` or `npm run preview`

**NOTE**: You have to build it first.

## How to use dockerfile

Remove previous build & container then make new one

```
docker build -t retail-portal . --no-cache
docker run -it --name "retail-portal" -p 3030:80 retail-portal
```
Go http://localhost:3030/