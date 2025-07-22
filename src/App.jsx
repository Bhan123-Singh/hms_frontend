
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/ContactPage'
import Department from './Pages/Department'
import Appointment from './Pages/Appointment'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/User/Profile'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'




const router=createBrowserRouter([
  {path:'*',
    element:<NotFound/>

  },

  {
    path:'/',
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
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
   {
    path:'/user/profile',
    element:<Profile/>
  },
   {
    path:'/logout'
    
  }
  ,
  {
    path:'/admin/dashboard',
    element:<AdminDashboard/>
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
