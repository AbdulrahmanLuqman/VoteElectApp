import { FaHome } from "react-icons/fa"
import { FaVoteYea } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
// import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const BottomNavLinks = () =>{
    const location = useLocation()

    // var 

    return(
        <div className="max-w-md  bg-white fixed bottom-0 w-full flex justify-between px-10 py-2">
            <button>
                <Link to="/home" className="flex flex-col items-center">
                    <FaHome  className={location.pathname === "/home" ? "text-green-600" : "text-black"}/>
                    <span className={location.pathname === "/home" ? "text-green-600 font-semibold" : "text-black font-semibold"}>Home</span>
                </Link>
            </button>
            <button>
                <Link to="/vote" className="flex flex-col items-center">
                    <FaVoteYea className={location.pathname === "/vote" ? "text-green-600" : "text-black"}/>
                    <span className={location.pathname === "/vote" ? "text-green-600 font-semibold" : "text-black font-semibold"}>Vote</span>
                </Link>
            </button>
            <button>
                <Link to="/profile" className="flex flex-col items-center">
                    <FaUser className={location.pathname === "/profile" ? "text-green-600" : "text-black"}/>
                    <span className={location.pathname === "/profile" ? "text-green-600 font-semibold" : "text-black font-semibold"}>Profile</span>
                </Link>
            </button>
        </div>
    )
}

export default BottomNavLinks