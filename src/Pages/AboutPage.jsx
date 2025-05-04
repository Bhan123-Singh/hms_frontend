import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import icuabout from '../assets/images/icuabout.jpg'
import prabhatneuro from '../assets/images/prabhatneuro.jpg'
import kartikeheart from '../assets/images/kartikeheart.jpg'
import rekhagyno from '../assets/images/rekhagyno.jpg'
import spsingheye from '../assets/images/spsingheye.jpeg'

function AboutPage() {
  return (
  <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
            <div className="flex items-center gap-5 mx-10">
                <section className="w-1/2 space-y-10">
                <h1 className="text-5xl text-yellow-500 font-semibold">
                We are developing a healthcare
                system around you

                </h1>
                <p className="text-xl text-gray-200">
                We think that everyone should have easy access to excellent
                 healthcare. Our aim is to make the procedure as simple as
                   possible for our patients and to offer treatment no matter
                    where they are — in person or at their convenience.

                </p>

                </section>
                <div className="w-1/2">
                <img src={icuabout} alt="aboutusPage" className="drop-shadow-6xl rounded-lg w-3/4" />

                </div>

            </div>
            <h1 className='text-center font-semibold text-5xl text-yellow-400'>Our Doctors</h1>

            <div className="carousel w-1/2 my-16 m-auto ">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%] ">
    <img
      src={prabhatneuro}
      className="w-40 rounded-full border-2 border-gray-400" />
         <h3 className="text-2xl font-semibold">
        Dr. Prabhat Singh

      </h3>
      <p className="text-gray-200 text-xl">
      {  " Dr Prabhat Singh is an esteemed Neurologist (Neuro Physician) in AllahabadHe is a MBBS, MD, DM. Some of the neurology diseases treated by him are loss of sensation, meningitis"}

      </p>
   
    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

    </div>
  
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={kartikeheart}
      className="w-40 rounded-full border-2 border-gray-400" />
      <h3 className="text-2xl font-semibold">
        Dr. Kartike Sharma

      </h3>
      <p className="text-gray-200 text-xl">
      {"“Dr. Kartike Sharma is an interventional cardiologist at the Prayag Heart Care Center. He specialises in treating simple and complex cardiac diseases and problems"}

      </p>
      
    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={rekhagyno}
      className="w-40 rounded-full border-2 border-gray-400" />
           <h3 className="text-2xl font-semibold">
        Rekha Shrivastva

      </h3>
       <p className="text-gray-200 text-xl">
      {"Dr. Rekha Shrivastva is a renowned Gynecologist in Allahabad. She has completed her MBBS and MS and a practicing Gynecologist"}

      </p>
 
    <div className="absolute   left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src={spsingheye}
      className="w-40 rounded-full border-2 border-gray-400" />

<h3 className="text-2xl font-semibold">
        Dr. Shan Singh

      </h3>
       <p className="text-gray-200 text-xl">
      {" Dr. Shan Singh has 25 years of experience in his field. He prioritises attentive listening to his patients' needs before offering tailored recommendations. He treats all kinds of eye-related problems."}

      </p>
    
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

export default AboutPage