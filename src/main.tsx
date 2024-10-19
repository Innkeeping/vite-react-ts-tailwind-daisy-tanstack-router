import { StrictMode} from'react'
import { createRoot } from'react-dom/client'
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router'
import './index.css'

import { routeTree } from './routeTree.gen'

const hashHistory = createHashHistory()
const router = createRouter({
  routeTree, history: hashHistory,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root=document.getElementById('root')!
if (!root.innerHTML){
  createRoot(root).render(
    <StrictMode>
      <RouterProvider {...{ router }}/>
    </StrictMode>,
  )
}