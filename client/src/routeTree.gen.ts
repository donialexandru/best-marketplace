/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as ProductsImport } from './routes/products'
import { Route as FavouritesImport } from './routes/favourites'
import { Route as CartImport } from './routes/cart'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
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
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
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
  '/profile': typeof ProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/favourites': typeof FavouritesRoute
  '/products': typeof ProductsRoute
  '/profile': typeof ProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cart': typeof CartRoute
  '/favourites': typeof FavouritesRoute
  '/products': typeof ProductsRoute
  '/profile': typeof ProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/cart' | '/favourites' | '/products' | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cart' | '/favourites' | '/products' | '/profile'
  id: '__root__' | '/' | '/cart' | '/favourites' | '/products' | '/profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CartRoute: typeof CartRoute
  FavouritesRoute: typeof FavouritesRoute
  ProductsRoute: typeof ProductsRoute
  ProfileRoute: typeof ProfileRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CartRoute: CartRoute,
  FavouritesRoute: FavouritesRoute,
  ProductsRoute: ProductsRoute,
  ProfileRoute: ProfileRoute,
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
        "/profile"
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
    "/profile": {
      "filePath": "profile.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
