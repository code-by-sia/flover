import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { store } from './store'

import './index.scss'

const router = createBrowserRouter(routes)
const root = document.getElementById('app')

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
