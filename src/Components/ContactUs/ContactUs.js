import React from "react";
import '../Home/Home.css';
import { Link } from "react-router-dom";


export default function ContactUs() {
  return (
    <section id="Contact" className="contact w-full  bg-white  ">
    <div className="contact-us ">
    <div className="absolute">
    <div className="regtangile8 absolute w-60 h-5 rounded-full  shadow-md shadow-gray-900 bg-white" data-aos="fade-right"></div>
    <div className="regtangile9 absolute w-60 h-5 rounded-full  shadow-md shadow-gray-900 bg-black rotate-90" ></div>
    <div className="regtangile10 absolute w-60 h-5 rounded-full  shadow-md shadow-gray-900 " data-aos="fade-left"  ></div>
    </div>
    </div>


      <div className="absolute w-96 h-96 rounded-full border-4 border-red-900 ml-40 mt-36  mr-40 shadow-xl shadow-gray-900 ">
      <div className="absolute">

      <p className="about-font1  text-8xl center text-black" data-aos="fade-right" >CONT</p>
      <p className="about-font2 text-8xl center text-black ml-16 pb-3" data-aos="fade-left" >ACT</p>
      <p className="about-font3  text-8xl center text-black " data-aos="fade-right">ME</p>
      <div className="regtangile3 w-32 h-1 rounded-lg ml-32 mb-5 " data-aos="fade-right" ></div>
      <div className="regtangile4 w-32 h-1 rounded-lg bg-black ml-20" data-aos="fade-right"></div>
      </div>
      </div>


      <div className="flex flex-col ">
      <div className="conact-container1 flex">
        <div className="regtangile11  w-52 h-8 rounded-full  shadow-md shadow-gray-900"></div>
      <p className="font-style2 text-2xl pl-10">ROKAYA AMJAAD SHAWKI</p>
          <div className="conact-blackcircle center absolute w-14 h-14 rounded-full bg-transparent  ml-44 border-2 border-black shadow-md shadow-gray-900 hover:scale-125">
            <Link to="https://www.linkedin.com/in/rokaya-amjaad-shawki-708608231"><i className="fa-brands fa-linkedin-in text-black text-3xl mt-2 "></i></Link>
    </div>
    <div className="conact-redcircle absolute w-8 h-8 rounded-full bg-transparent mt-8 ml-44  border-2 border-red-900 shadow-md shadow-gray-900 ">
    </div>
    </div>


    <div className="conact-container2 flex">
      <div className="regtangile11  w-52 h-8 rounded-full  shadow-md shadow-gray-900"></div>
      <p className="font-style2 text-2xl pl-10">ROKAYAAMJAAD</p>
      <div className="conact-blackcircle center absolute w-14 h-14 rounded-full bg-transparent ml-44  border-2 border-black shadow-md shadow-gray-900 hover:scale-125">
      <Link to="https://github.com/rokayaamjaad"><i className="fa-brands fa-github text-black text-3xl mt-2"></i></Link>
    </div>
    <div className="conact-redcircle absolute w-8 h-8 rounded-full bg-transparent mt-8 ml-44  border-2 border-red-900 shadow-md shadow-gray-900 ">
    </div>
    </div>

    <div className="conact-container2 flex">
      <div className="regtangile11  w-52 h-8 rounded-full  shadow-md shadow-gray-900"></div>
      <p className="font-style2 text-2xl pl-10">ROKAYA-AMJAAD</p>
        <div className="conact-blackcircle center absolute w-14 h-14 rounded-full bg-transparent ml-44  border-2 border-black shadow-md shadow-gray-900 hover:scale-125 ">
          <Link to="https://www.facebook.com/rokaya.amged/"><i className="fa-brands fa-facebook-f text-black text-3xl mt-2"></i></Link>
    </div>
    <div className="conact-redcircle absolute w-8 h-8 rounded-full bg-transparent mt-8 ml-44  border-2 border-red-900 shadow-md shadow-gray-900 ">
    </div>
    </div>

    </div>



    </section>

)}
