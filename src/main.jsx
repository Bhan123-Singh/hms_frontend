
//components import
import App from './App.jsx'
//css import
import './index.css'
//Library import
import ReactDom from 'react-dom/client'
import BrowerRouter from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import{ Provider} from 'react-redux'
import store from './Redux/store.js'

ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

     <BrowerRouter>

       <App />
       <Toaster/>

     </BrowerRouter>

    </Provider>
 

   
 
)
