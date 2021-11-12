import React from 'react'
// import {
//   HomePage,
//   RestaurantPage,
//   SpotPage,
//   RestaurantInfoPage,
//   SpotInfoPage
// } from 'Pages'
import { HomePage } from 'Pages'
import { Navigate } from 'react-router-dom'
const SpotPage = React.lazy(() => import('../Pages/SpotPage'))
const SpotInfoPage = React.lazy(() => import('../Pages/SpotInfoPage'))
const RestaurantPage = React.lazy(() => import('../Pages/RestaurantPage'))
const RestaurantInfoPage = React.lazy(() =>
  import('../Pages/RestaurantInfoPage')
)

const routes = [
  {
    path: '/',
    name: '首頁',
    exact: true,
    element: <HomePage />
  },
  {
    path: '/scenicspots/:place',
    name: '旅遊景點',
    exact: true,
    element: (
      <React.Suspense fallback={<>...</>}>
        <SpotPage />
      </React.Suspense>
    )
  },
  {
    path: '/scenicspots/detail/:id',
    name: 'spotInfo',
    exact: true,
    element: (
      <React.Suspense fallback={<>...</>}>
        <SpotInfoPage />
      </React.Suspense>
    )
  },
  {
    path: '/restaurants/main/:place/:classify',
    name: '美食餐廳',
    exact: true,
    element: (
      <React.Suspense fallback={<>...</>}>
        <RestaurantPage />
      </React.Suspense>
    )
  },
  {
    path: '/restaurants/:place/:id',
    name: 'RestaurantInfo',
    exact: true,
    element: (
      <React.Suspense fallback={<>...</>}>
        <RestaurantInfoPage />
      </React.Suspense>
    )
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

export default routes
