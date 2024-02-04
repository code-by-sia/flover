import React from 'react'
import NotFoundPage from './pages/error/404'

import HomePage from '@/pages/home'
import CategoriesHomePage from '@/pages/categories'
import RecipePage from '@/pages/categories/recipe'
import CalendarPage from '@/pages/calendar'
import FeedsPage from '@/pages/feeds'
import GrocoryListPage from '@/pages/grocory-list'
import BrowserPage from '@/pages/browser'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/categories/:categoryId',
        element: <CategoriesHomePage />,
        children: [
          {
            path: 'recipes/:recepieId',
            element: <RecipePage />,
          },
        ],
      },
      {
        path: '/calendar',
        element: <CalendarPage />,
      },
      {
        path: '/grocory-list',
        element: <GrocoryListPage />,
      },
      {
        path: '/browser',
        element: <BrowserPage />,
      },
      {
        path: '/feeds/:feedId',
        element: <FeedsPage />,
      },
    ],
  },
]
