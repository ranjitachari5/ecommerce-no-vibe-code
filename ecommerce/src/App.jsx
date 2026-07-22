import { useState } from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Sale from './pages/Sale'
import Women from './pages/Women'
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
      {path:"/sale",element:<Sale/>}, 
      { path: "/streetwear", element: <Streetwear/> },
      {path:"/women",element:<Women/>},
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
