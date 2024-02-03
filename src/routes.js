import React from 'react'
import NotFoundPage from './pages/error/404'

import HomePage from '@/pages/home'
import CategoriesHomePage from '@/pages/categories'
import RecipePage from '@/pages/categories/recipe'

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
    ],
  },
]
