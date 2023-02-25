import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"


export default function Navbar() {
  return (

       <nav className="site-nav  pt-1 inset-x-0 top-0 absolute z-30" >



            <ul className =" ListNavbar flex flex-row justify-center text-[15px]  items-center sm:gap-x-7 gap-x-4 sm:text-[20px] ">
            <div><i className="fa-solid fa-user-plus text-white text-2xl pr-10 hover:text-orange-500"></i></div>
      <div><i className="fa-solid fa-magnifying-glass text-white text-2xl pr-5 hover:text-orange-500"></i></div>
                 <li className ="font-style mr-10 text-white text-2xl hover:text-orange-500 ">
                    <Link to ="/">الرئيسية</Link>
                </li>
                <li className ="font-style mr-10 text-white text-2xl hover:text-orange-500" >
                    <Link to="">من نحن</Link>
                </li>
                <li className ="font-style text-white mr-10 text-2xl hover:text-orange-500" >
                    <Link to="">الموقع</Link>
                </li>

                <div className="flex flex-row gap-x-2">
                <img src={logo} alt="logo" />

               </div>
                <li className ="font-style mr-10 text-white text-2xl hover:text-orange-500" >
                    <Link to="">المقالات</Link>
                </li>

                <li className ="font-style mr-10 text-white text-2xl hover:text-orange-500">
                    <Link to="">الدورات</Link>
                </li>
                <li className ="font-style text-white mr-14 text-2xl hover:text-orange-500">
                    <Link to="">المزيد</Link>
                </li>




            </ul>
       </nav> )}
