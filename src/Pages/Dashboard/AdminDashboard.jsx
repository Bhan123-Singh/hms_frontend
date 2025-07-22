import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import {ArcElement,Legend,CategoryScale,Chart as ChartJS,LinearScale,BarElement,Title,Tooltip} from 'chart.js';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {  bookAppointment, getappointment } from "../../Redux/Slices/appointmentSlice";
// import { getStatsData } from "../../Redux/Slices/statSlice";
import {Bar, Pie} from 'react-chartjs-2';
import {FaUsers} from 'react-icons/fa';
import {FcSalesPerformance} from 'react-icons/fc';
import {GiMoneyStack} from 'react-icons/gi';
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";



 //these are the object it's provided by chart.js
 ChartJS.register(ArcElement,BarElement,CategoryScale,Legend,LinearScale,Title,Tooltip);

  

    function AdminDashboard(){

        const dispatch=useDispatch();
        const navigate=useNavigate();
        const {allPatientCount,bookedAppointmentPatient}=useSelector((state)=>state.appointment);
        // const  {allPayments,finalMonths,monthlySalesRecord}=useSelector((state)=>state.razorpay);
        const userData={
            labels:['Registered Patient','Booked Appointment Patient'],
            datasets:[
                {
                label:'Patient Details',
                data:[allPatientCount,bookedAppointmentPatient],
                backgroundColor:['yellow','green'],
                borderWidth:1,
                borderColor:['yellow','green']
            }

            // {
            //     label:'User Details',
            //     data:[10,15],
            //     backgroundColor:['red','blue'],
            //     borderWidth:1,
            //     borderColor:['yellow','green']
            // }
        ]
        }
      

        const numbeofUsers={
            labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            fontColor:'white',
            datasets:[{
                label:'Book Appointment/Month',
                
                backgroundColor:['rgb(205,99,132)'],
                borderColor:['white'],
                borderWidth:2
            }]
        }
         const BookAppointment=useSelector((state)=>state?.appointment);
        // window gives the message 'Are you sure you want to delete the course'
        //  then enduser accept the common yes then execute the if statement
        async function onCourseDelete(id){
            if(window.confirm('Are you sure you want to delete the course?')){
                 const res=await dispatch(deletedCourse(id));
                 if(res?.payload?.success){
                    await dispatch(getappointment());
                 }

            }
        }


        useEffect(()=>{
            (
                async()=>{
                    await dispatch(getappointment());
                    // await dispatch(getStatsData());
                    // await dispatch(getPaymentRecord())
                }
            )()
        },[])

        return(
            <HomeLayout>
                <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
                    <h1 className="text-center text-5xl font-semibold text-yellow-500">
                        Admin Dashboard
                    </h1>
                    <div className="grid grid-cols-2 gap-5 m-auto mx-10">
                        <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                          <div className="w-80 h-80">
                            <Pie data={userData}/>
                            </div>  

                            <div className="grid grip-cols-2 gap-5">
                                <div className="flex itmes-center justify-between p-5 gap-5 rounded-md shadowmd">
                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold">
                                            Registered Patient
                                        </p>
                                        <h3 className="text-4xl font-bold">
                                            {allPatientCount}

                                        </h3>

                                    </div>
                                
                                        <FaUsers className='text-yellow-500 text-5xl '/> 

                                </div>

                                <div className="flex itmes-center justify-between p-5 gap-5 rounded-md shadowmd">
                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold">
                                            Booked Appointment Patient
                                        </p>
                                        <h3 className="text-4xl font-bold">
                                            {bookedAppointmentPatient}

                                        </h3>

                                    </div>
                                
                                        <FaUsers className='text-green-500 text-5xl '/> 

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-co items-center gap-10 shadow-lg rounded-md">
                            {/* <div className="h-80 w-full relative">
                                <Bar data={salesData}
                                className="absolute bottom-0 h-80 w-full"/>

                            </div> */}

                            
                            <div className="grid grip-cols-2 gap-5">
                                <div className="flex itmes-center justify-between p-5 gap-5 rounded-md shadowmd">
                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold">
                                            BookedAppointment Count
                                        </p>
                                        {/* <h3 className="text-4xl font-bold">
                                            {allPayments?.count}

                                        </h3> */}

                                    </div>
                                
                                        <FcSalesPerformance className='text-yellow-500 text-5xl '/> 

                                </div>

                                <div className="flex itmes-center justify-between p-5 gap-5 rounded-md shadowmd">
                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold">
                                            Total Revenue
                                        </p>
                                        {/* <h3 className="text-4xl font-bold">
                                            {allPayments?.count *499}

                                        </h3> */}

                                    </div>
                                
                                        <GiMoneyStack className='text-yellow-500 text-5xl '/> 

                                </div> 

                        </div>
                        </div>

                    </div>

                    <div className="mx-[10%] w-[80%] self-center  flex flex-col items-center justify-center gap-10 m-bottom-10">
                     <div className="flex w-full items-center justify-between">
                       
                            <h1 className="text-center text-3xl font-semibold">
                                Patient Overview
                            </h1>

                            <button 
                            onClick={()=>{
                                navigate('/appointment')
                            }}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300
                             rounded px-2 py-2 text-lg cursor-pointer">
                             Book Appointment
                            </button>
                   

                     </div>


                     <table className="table overflow-x-scroll">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Name</th>
                                <th> Email</th>
                                <th> Phone</th>
                                <th>department</th>
                                <th>Message</th>
                                <th>Action</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            
                
                                            <td>
                                                <textarea readOnly  
                                                className="w-40 h-auto bg-transparent reseize-none" >

                                                </textarea>
                                            </td>
                                            <td>
                                                email

                                            </td>
                                            <td>
                                                phone
                                            </td>
                                            <td>
                                                
                                                    department
                                                
                                            </td>
                                            <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                               <textarea 
                                               readOnly
                                               className="w-80 h-auto bg-transparent resize-none" >
                                                </textarea> 

                                            </td>
                                            <td className="flex items-center gap-4">
                                                {/* <button
                                                className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                onClick={()=>navigate('/course/displaylectures',{state:{...course}})}>
                                                    < BsCollectionPlayFill/>

                                                </button> */}

                                                <button
                                                className="bg-red-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                >
                                                    < BsTrash/>

                                                </button>

                                            </td>

                                        
                                
                            
                        
                        </tbody>

                     </table>

                    </div>

                </div>
            </HomeLayout>
        )
        }

    


    

export default AdminDashboard