import React from "react";
import "./Navbar.css";
import {HashLink as Link } from "react-router-hash-link";



export default function Navbar() {
  return (

       <nav className="site-nav w-full h-16  pt-1 inset-x-0 top-0 absolute z-30 " >


           <div className="absolute z-50">
            <ul className =" header-font flex flex-row justify-center  text-[15px]  items-center sm:gap-x-7 gap-x-4 sm:text-[20px] ">

                 <li className ="text-2xl text-white ml-10 ">
                    <Link to ="#Home">Ho<span className="text-red-800">m</span>e</Link>
                </li>
                <li className ="text-white text-2xl ml-12 " >
                    <Link to="#About">About</Link>
                </li>
                <li className ="text-white  text-2xl ml-12" >
                    <Link to="#Protofilo">protofilo</Link>
                </li>


                <li className ="text-white  text-2xl ml-12" >
                    <Link to="https://github.com/rokayaamjaad/MY-resume.git">Resume</Link>
                </li>

                <li className ="text-white  text-2xl ml-12">
                    <Link to="#Contact">contact</Link>
                </li>





            </ul></div>
       </nav> )}
