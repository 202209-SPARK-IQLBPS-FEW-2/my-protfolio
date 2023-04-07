import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (

       <nav className="site-nav bg-black opacity-10 h-16 pt-1 inset-x-0 top-0  " >



            <ul className =" header-font flex flex-row justify-center text-[15px]  items-center sm:gap-x-7 gap-x-4 sm:text-[20px] ">

                 <li className ="text-2xl text-white ml-10 ">
                    <Link to ="/">Ho<span className="text-red-800">m</span>e</Link>
                </li>
                <li className ="text-white text-2xl ml-12 " >
                    <Link to="">About</Link>
                </li>
                <li className ="text-white  text-2xl ml-12" >
                    <Link to="">protofilo</Link>
                </li>


                <li className ="text-white  text-2xl ml-12" >
                    <Link to="">Resume</Link>
                </li>

                <li className ="text-white  text-2xl ml-12">
                    <Link to="">contact</Link>
                </li>





            </ul>
       </nav> )}
