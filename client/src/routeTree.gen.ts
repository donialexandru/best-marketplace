/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserImport } from './routes/user'
import { Route as ProductsImport } from './routes/products'
import { Route as FavouritesImport } from './routes/favourites'
import { Route as CartImport } from './routes/cart'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UserRoute = UserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const ProductsRoute = ProductsImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const FavouritesRoute = FavouritesImport.update({
  id: '/favourites',
  path: '/favourites',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/favourites': {
      id: '/favourites'
      path: '/favourites'
      fullPath: '/favourites'
      preLoaderRoute: typeof FavouritesImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/favourites': typeof FavouritesRoute
  '/products': typeof ProductsRoute
  '/user': typeof UserRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/favourites': typeof FavouritesRoute
  '/products': typeof ProductsRoute
  '/user': typeof UserRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/favourites': typeof FavouritesRoute
  '/products': typeof ProductsRoute
  '/user': typeof UserRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/cart' | '/favourites' | '/products' | '/user'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cart' | '/favourites' | '/products' | '/user'
  id: '__root__' | '/' | '/cart' | '/favourites' | '/products' | '/user'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CartRoute: typeof CartRoute
  FavouritesRoute: typeof FavouritesRoute
  ProductsRoute: typeof ProductsRoute
  UserRoute: typeof UserRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CartRoute: CartRoute,
  FavouritesRoute: FavouritesRoute,
  ProductsRoute: ProductsRoute,
  UserRoute: UserRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/cart",
        "/favourites",
        "/products",
        "/user"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/cart": {
      "filePath": "cart.jsx"
    },
    "/favourites": {
      "filePath": "favourites.jsx"
    },
    "/products": {
      "filePath": "products.jsx"
    },
    "/user": {
      "filePath": "user.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
