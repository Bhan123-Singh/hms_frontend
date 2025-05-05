import { useState } from "react"
import toast from 'react-hot-toast'
import HomeLayout from "../Layouts/HomeLayout"
import { isEmail } from "../Helpers/ragaxMatcher";
import axiosInstance from "../Helpers/axiosInstance";


function Appointment(){
    const [userInput,setUserInput]=useState({
        name:'',
        email:'',
        phone:'',
        message:'',
        department:''   
    });
    function handleInputChange(e){
        const {name,value}=e.target;
        console.log(name,value);
        setUserInput({
            ...userInput,
            [name]:value 
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All field are Mandatory!");
            return;
        }
      
       if(!isEmail(userInput.email)){
        toast.error("Invalid Email");
        return;
       }
       try{
       const response=axiosInstance.post("/appointment",userInput)
       toast.promise(response,{
        loading:"Booking your Appointment...",
        success:"Book Appointment successfully",
        error:"Failed to Book Appointment  form"
       });
       const contactResponse=await response;
       if(contactResponse?.data?.success){
        setUserInput({
            name:'',
            email:'',
            phone:'',
            department:'',
            message:'', 
        });
       }
       }
       catch(err){
        toast.error("Booking Appointment failed...")

       }

        
    }

 return(
   <HomeLayout>
    <div className="flex items-center justify-center h-[100vh]">
    <form 
    onSubmit={onFormSubmit}
    className="flex flex-col items-center justify-center gap-2 p-5 prounded-md text-white shadow-[0_0_10px_black] w-[22rem] " noValidate>
<h1  className="text-3xl font-semibold text-yellow-400">
Appointment
</h1>
<div className="flex flex-col  w-full gap-1">
    <label htmlFor="name"
    className="text-xl font-semibold">
Name
    </label>
    <input type="text" 
    className="bg-transparent border px-2 py-1 rounded-sm"
    id="name"
    name="name"
    placeholder="enter your name..."
    onChange={handleInputChange}
    value={userInput.name}/>

<label htmlFor="email"
    className="text-xl font-semibold">
Email
    </label>
    <input type="email" 
    className="bg-transparent border px-2 py-1 rounded-sm"
    id="email"
    name="email"
    placeholder="Enter your email..."
    onChange={handleInputChange}
    value={userInput.email}/>

    <label htmlFor="phone"
    className="text-xl font-semibold">
Phone No.
    </label>
    <input type="number" 
    className="bg-transparent border px-2 py-1 rounded-sm"
    id="phone"
    name="phone"
    placeholder="Enter your Phone No..."
    onChange={handleInputChange}
    value={userInput.phone}/>
        <label htmlFor="department"
    className="text-xl font-semibold">
Department
    </label>
    
    <select name="department" id="department" className="bg-gray-700">
        <option value={userInput.department}>Neurology</option>
        <option value={userInput.department}> EyeCare</option>
        <option value={userInput.department}>HeartCare</option>
        <option value={userInput.department}>Gynaecology</option>
    </select>
    

<label htmlFor="message"
    className="text-xl font-semibold">
Message
    </label>
    <textarea
    className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
    id="message"
    name="message"
    placeholder="enter your message..."
    onChange={handleInputChange}
    value={userInput.message}/>
</div>
<button  type="submit"
className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"    >
    Book Appointment
</button>
    </form>
    </div>

   </HomeLayout>
 )   
}
export default Appointment;