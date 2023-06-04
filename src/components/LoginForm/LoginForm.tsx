// import React from "react";
import "./LoginForm.css";
import Post6 from "../../assets/Post6.png";

const LoginForm = () =>{
return(
    <div className="loginform w-[70vw] min-h-[80vh] bg-green-200 absolute flex">
      <div className="leftside w-[50%] p-10 py-[5rem] bg-white h-full flex flex-col">
      <div className="w-full ">
        <h4 className="text-lg text-primaryOrange font-bold mb-3 ">Welcome to Mind Blowing morning!</h4>
        <h2 className="text-4xl text-[#0A033C] font-semibold leading-10">Login to view your personal course Dashboard</h2>
      </div>
      <div className=" w-full my-3 mt-7">
        <img src={Post6} alt="wakeup" className="w-[80%] "/>
      </div>
        </div> 

      <div className="rightside w-[50%] justify-center  py-[5rem] bg-green-500 h-full flex flex-col ">
        <Login></Login>
        </div> 
       

    </div>

);
}
export default LoginForm;

const Login = () =>{
    return(
        <div className="max-w-[80%] bg-yellow-200 h-full  ">
            <div className="w-full">
            <input type="text" placeholder="email"/>
            
            </div>
            <div></div>
        </div>
    )
}