import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'

import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';



function HomeLayout({children}){
    
 
 

    function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width ='auto';
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        //changeWidth();

    }

 
    return(
        <div className="min-h-[90vh]">
        
            <div className="drawer absolute left-0 z-50 w-fit">
                <input type="checkbox" className="drawer-toggle"  id="my-drawer"/>
                <div className='drawer-contant'>
                <label htmlFor="my-drawer"
                className="cursor-pointer relative">
                    <FiMenu
                    onClick={changeWidth}
                    size={"32px"}
                    className="font-bold text-white m-4"/>

                </label>

                </div>
             
            
            <div className='drawer-side w-0 mx-10  '>
                <label htmlFor="my-drawer"
                className='drawer-overlay'></label>

                <ul className='menu p-4 w-48 sm:w-88 bg-base-200 text-base-content relative bg-gray-600 text-white'>
                    
                    <li className='w-fit absolute right-2 z-50'>
                        <button onClick={hideDrawer}>
                            < AiFillCloseCircle size={20}/>
                        </button>

                    </li>

                    <li>
                        <Link to='/home'>
                        Home
                        </Link>
                    </li>
                    

                  
                    
                    <li>
                        <Link to='/department'> 
                         Deparments
                    
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                        Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/appointment'>
                        Appointments
                        </Link>
                    </li>
                   
                             


                                
                                
                          
                           
                    

                    

                    
                       
                    </ul>

                    </div>

                
            
            </div>

            {children}
            <Footer/>

       
        </div>
    )
}
export default HomeLayout