/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PageLazyImport = createFileRoute('/page')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PageLazyRoute = PageLazyImport.update({
  id: '/page',
  path: '/page',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/page.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/page': {
      id: '/page'
      path: '/page'
      fullPath: '/page'
      preLoaderRoute: typeof PageLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/page': typeof PageLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/page': typeof PageLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/page': typeof PageLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/page'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/page'
  id: '__root__' | '/' | '/page'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  PageLazyRoute: typeof PageLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  PageLazyRoute: PageLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/page"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/page": {
      "filePath": "page.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
