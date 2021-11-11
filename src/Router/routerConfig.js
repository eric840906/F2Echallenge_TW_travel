import {
  HomePage,
  RestaurantPage,
  SpotPage,
  RestaurantInfoPage,
  SpotInfoPage
} from 'Pages'
import { Navigate } from 'react-router-dom'

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
    element: <SpotPage />
  },
  {
    path: '/scenicspots/detail/:id',
    name: 'spotInfo',
    exact: true,
    element: <SpotInfoPage />
  },
  {
    path: '/restaurants/main/:place/:classify',
    name: '美食餐廳',
    exact: true,
    element: <RestaurantPage />
  },
  {
    path: '/restaurants/:place/:id',
    name: 'RestaurantInfo',
    exact: true,
    element: <RestaurantInfoPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]

export default routes
