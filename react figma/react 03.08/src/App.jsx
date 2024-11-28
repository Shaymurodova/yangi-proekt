import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './layout/RouterLayout'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Agents from './pages/Agents'
import Blog from './pages/Blog'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RouterLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
        path:"properties",
        element:<Properties/>
        },
        {
          path:"agents",
          element:<Agents/>
        },
        {
          path:"blog",
          element:<Blog/>                      
        }
      ]
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
