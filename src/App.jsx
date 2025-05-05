
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/ContactPage'
import Department from './Pages/Department'
import Appointment from './Pages/Appointment'
import NotFound from './Pages/NotFound'

const router=createBrowserRouter([
  {path:'/',
    element:<NotFound/>

  },

  {
    path:'/home',
    element:<HomePage/>
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/department',
    element:<Department/>
  },
  {
    path:'/appointment',
    element:<Appointment/>
  }
  
])

function App() {
       

  return (
    <>
   <RouterProvider router={router}/>
     
    </>
  )
}

export default App
