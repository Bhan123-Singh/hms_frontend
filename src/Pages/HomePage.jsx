import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom';
import  doctor1 from '../assets/images/doctor1.jpg'

function HomePage() {
  return (
 <HomeLayout>
    <div className="pt-10  text-white flex flex-col  md:flex-row items-center justify-center gap-10 mx-4 md:mx-16 h-auto md:h-[98vh]">
  <div className="w-full md:w-1/2 space-y-6">
    <h1 className="text-5xl font-semibold pt-10  ">
      We are <span className="text-yellow-500 font-bold">determined</span> for your <span className="text-yellow-500 font-semibold">better life.</span>
    </h1>

    <p className="text-xl text-gray-200">
      You can get the care you need 24/7 – be it online or in person. You will be treated by caring specialist doctors.
    </p>

    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
      <Link to="/appointment">
        <button className="bg-yellow-600 px-5 py-3 rounded-md hover:bg-yellow-700 transition-all ease-in-out duration-300 cursor-pointer text-lg font-semibold w-full sm:w-auto">
          Make an Appointment
        </button>
      </Link>

      <Link to="/contact">
        <button className="border border-white px-5 py-3 rounded-md hover:bg-yellow-700 transition-all ease-in-out duration-300 cursor-pointer font-semibold text-lg w-full sm:w-auto">
          Contact Us
        </button>
      </Link>
    </div>
  </div>

  <div className="w-full md:w-1/2 flex justify-center">
    <img src={doctor1} alt="Smiling doctor" className="rounded-full w-4/5" />
  </div>
</div>

   
    </HomeLayout>
  )
}

export default HomePage;