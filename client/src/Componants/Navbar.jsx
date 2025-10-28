import React from "react";
import {useNavigate } from "react-router-dom";


export const Navbar=()=>{

      const navigate= useNavigate();

const handleLogin=()=>{
    console.log("login clicked")
    navigate("/login ")
}
const handleSignUp=()=>{
    console.log("SignUpclicked")
    
}

    return (
        <>
        <div className="bg-gray-50 shadow-2xl  justify-end flex p-4">
           <ul className="flex gap-4">
           <button
             onClick={handleLogin} >Login
            </button>
          <button     onClick={handleSignUp} >
            Signup
          </button>
           </ul>
        </div>
        </>
    )
}