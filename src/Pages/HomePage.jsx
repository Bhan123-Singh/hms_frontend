import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom';
import  doctor1 from '../assets/images/doctor1.jpg'

function HomePage() {
  return (
 <HomeLayout>
    <div className="pt-10  text-white flex items-center
 justify-center gap-10 mx-16 h-[98vh]">
    <div className="w-1/2 space-y-6">

    <h1 className="text-5xl font-semibold ">
    We are   
    <span className=" text-yellow-500 font-bold ">
     determined
    </span>
    for
    your
    <span className=" text-yellow-500 font-bold ">
    better life.
    </span>
    
    </h1>
    
  
    <p className="text-xl text-gray-200">
    You can get the care you need 24/7 – be it online or in
    person. You will be treated by caring specialist doctors.
        
    </p>
    <div className="space-x-6">
        <Link to="/appointment">
        <button className="bg-yellow-600 px-5 py-3 rounded-md hover:bg-yellow-700 transition-all ease-in-out duration
        -300 cursor-pointer text-lg font-semibold">
            Make an Appointment
        </button>
        </Link>

        <Link to="/contact">
        <button className="border border-white px-5 py-3 rounded-md hover:bg-yellow-700 transition-all ease-in-out
        duration-300 cursor-pointer font-semibold text-large">
            Constact Us

        </button>
        </Link>
        
    </div>
    

    </div>
    <div className="w-1/2 flex items-center justify-center  ">
    <img src={doctor1} alt="HomePage image" className=" rounded-full w-4/5 "  />

    </div>

</div>
   
    </HomeLayout>
  )
}

export default HomePage;