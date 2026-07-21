import { useState } from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Banner from './components/Banner'
import Streetwear from './pages/Streetwear'
import { Ban } from 'lucide-react'
function App() {
  //routes
 const router = createBrowserRouter([
  {
    element: <><Navbar/><Outlet/></>,  
    children: [
      { path: "/", element: <Banner/> },
      {path:"/men", element:<Men/>},
      { path: "/streetwear", element: <Streetwear/> },
    ]
  },
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
