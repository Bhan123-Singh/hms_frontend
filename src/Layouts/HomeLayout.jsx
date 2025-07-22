import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import { logout } from '../Redux/Slices/AuthSlice';

function HomeLayout({ children }) {
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();


   function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width ='auto';
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        //changeWidth();

    }

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate('/');
  };

  return (

      <div className="min-h-[90vh] ">

        <div className='flex flex-col md:flex items-center px-20'>


        <ul className='hidden md:flex items-center gap-5   px-20 py-10  font-semibold  bg-gray-700 text-white  '>
                    
                   

                    <li>
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    { isLoggedIn && role==="ADMIN" &&(
                    
                    <li>
                        <Link to="/admin/dashboard">
                        Admin DashBoard
                        </Link>
                    </li>
                    ) }

                  
                    
                    <li>
                        <Link to='/department'> 
                         Departments
                    
                        </Link>
                    </li>
                    <li >
                        <Link to='/contact'>
                        ContactUs
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                        AboutUs
                        </Link>
                    </li>
                     <li>
                        <Link to='/appointment'>
                        Appointment
                        </Link>
                    </li>
                   
                    {!isLoggedIn &&(
                            <li   >
                                 <div className=' flex items-center  gap-10 '>
                                <button className='btn-primary px-4 py-1 font-semibold  rounded-md w-full bg-blue-800'>
                                    <Link to="/login">
                                    Login
                                    </Link>

                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-500'>
                                    <Link to="/signup">
                                    Signup
                                    </Link>

                                </button>

                            </div>
                            </li>
                    )
                }
                   

             {isLoggedIn &&(
                            <li  >
                                 <div className='w-full flex items-centet justify-center gap-10'>
                                <button className='btn-primary px-4 py-1 font-semibold  rounded-md w-full bg-blue-800'>
                                    <Link to="/user/profile">
                                    Profile
                                    </Link>

                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-500'>
                                    <Link to="/logout"  onClick={handleLogout}>
                                    Logout
                                    </Link>

                                </button>

                            </div>
                            </li>
                    )
                }

                                
                                
                          
                           
                    

                    

                    
                       
                    </ul> 



        </div>





        {/* mobile responsive */}


        {/* <div className='  bg-base-200 text-base-content relative bg-gray-700 text-white'> */}


            <div className="lg:hidden md:hidden drawer absolute left-0 z-50 w-fit">

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

                <ul className=' p-4 w-48 sm:w-120 bg-base-200 text-base-content relative bg-gray-600 text-white' >
                    
                    <li className='w-fit absolute right-2 z-50'>
                        <button onClick={hideDrawer}>
                            < AiFillCloseCircle size={20}/>
                        </button>

                    </li>

                    <li>
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    { isLoggedIn && role==="ADMIN" &&(
                    
                    <li>
                        <Link to="/admin/dashboard">
                        Admin DashBoard
                        </Link>
                    </li>
                    ) }

                  
                    
                    <li>
                        <Link to='/department'> 
                         Departments
                    
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
                        Appointment
                        </Link>
                    </li>
                   
                    {!isLoggedIn &&(
                            <li  >
                                 <div className='w-full flex items-centet justify-center'>
                                <button className='btn-primary px-4 py-1 font-semibold  rounded-md w-full bg-blue-800'>
                                    <Link to="/login">
                                    Login
                                    </Link>

                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-500'>
                                    <Link to="/signup">
                                    Signup
                                    </Link>

                                </button>

                            </div>
                            </li>
                    )
                }
                   

             {isLoggedIn &&(
                            <li  >
                                 <div className='w-full flex items-centet justify-center'>
                                <button className='btn-primary px-4 py-1 font-semibold  rounded-md w-full bg-blue-800'>
                                    <Link to="/user/profile">
                                    Profile
                                    </Link>

                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-pink-500'>
                                    <Link to="/logout"  onClick={handleLogout}>
                                    Logout
                                    </Link>

                                </button>

                            </div>
                            </li>
                    )
                }

                                
                                
                          
                           
                    

                    

                    
                       
                    </ul>

                    </div>

                
            
            




        </div>
            

            {children}
            <Footer/>

       
        </div>
  )
}

export default HomeLayout;
