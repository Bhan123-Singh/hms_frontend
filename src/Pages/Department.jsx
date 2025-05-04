import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import eye from '../assets/images/eye.jpg'
import heart from '../assets/images/heart.jpg'
import gyno from '../assets/images/gyno.jpg'
import nero from '../assets/images/nero.jpeg'

function Department() {
  return (
  <  HomeLayout>

  <div className='pt-10  text-white flex flex-col items-center
 justify-center gap-10 mx-16 h-[98vh]'>
<h1 className='text-5xl font-semibold  text-yellow-600' > Our Departments</h1>
   <div className="carousel w-1/2 my-16 m-auto ">
     <div id="slide1" className="carousel-item relative w-full">
       <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
       <img
         src={nero}
         className="w-lg border-2 rounded-sm border-gray-400" />
            <h3 className="text-2xl font-semibold">
          Neurology
   
         </h3>
        
      
       <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide4" className="btn btn-circle">❮</a>
         <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
     </div>
   
       </div>
     
     <div id="slide2" className="carousel-item relative w-full">
     <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
       <img
         src={eye}
         className="w-lg border-2 rounded-sm border-gray-400" />
         <h3 className="text-2xl font-semibold">
           Eye Care
   
         </h3>
       
         
       <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide1" className="btn btn-circle">❮</a>
         <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
     </div>
     </div>
     <div id="slide3" className="carousel-item relative w-full">
     <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
       <img
         src={gyno}
         className="w-lg border-2 rounded-sm border-gray-400" />
              <h3 className="text-2xl font-semibold">
           Gynaecology
   
         </h3>
        
    
       <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide2" className="btn btn-circle">❮</a>
         <a href="#slide4" className="btn btn-circle">❯</a>
       </div>
     </div>
     </div>
     <div id="slide4" className="carousel-item relative w-full">
     <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
       <img
         src={heart}
         className="w-lg border-2 rounded-sm border-gray-400" />
   
   <h3 className="text-2xl font-semibold">
           Heart Care
   
         </h3>
          
       
       <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide3" className="btn btn-circle">❮</a>
         <a href="#slide1" className="btn btn-circle">❯</a>
       </div>
     </div>
     </div>
   </div>

  </div>
  </HomeLayout>
  )
}

export default Department