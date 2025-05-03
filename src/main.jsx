
//components import
import App from './App.jsx'
//css import
import './index.css'
//Library import
import ReactDom from 'react-dom/client'
import BrowerRouter from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDom.createRoot(document.getElementById('root')).render(
 
    <BrowerRouter>

      <App />
      <Toaster/>

    </BrowerRouter>
   
 
)
