import HomeLayout from "../../Layouts/HomeLayout";


import {  useSelector } from "react-redux";






function Profile(){
   
    const userData=useSelector((state)=> state?.auth?.data);//if exits the state and exits the auth then takes the from auth
    
    
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
              <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-100 shadow-[0_0_10px_black]">
                <img src={userData?.avatar?.secure_url} alt="userimage"  className="w-40 m-auto rounded-full border border-black"/>
              <h3 className="text-xl font-semibold text-center capitalize">
                {userData?.fullName}

              </h3>

              <div className="grid grid-cols-2">
                <p> Email:</p> <p>{userData?.email}</p>
               
                <p> Role:</p> <p>{userData?.role}</p>
               
                
              </div>


          
              </div>
            </div>
        </HomeLayout>
    )
  }


export default Profile;