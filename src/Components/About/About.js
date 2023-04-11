import React from "react";
import "./About.css";
import '../Home/Home.css';



export default function About() {
  return (
    <section id="About" className="About-section flex ">
    <div className="w-full h-auto bg-white mb-20">
    <div className="reative w-96 h-96 rounded-full border-4 border-red-900 ml-auto mt-32 mr-40 shadow-xl shadow-gray-900 ">
    <div className="absolute">

    <p className="about-font1  text-8xl center text-black " data-aos="fade-right">ABO</p>
    <p className="about-font2 text-8xl center text-black ml-16" data-aos="fade-left">UT</p>
    <p className="about-font3  text-8xl center text-black" data-aos="fade-right" >ME</p>
    <div className="regtangile3 w-32 h-1 rounded-lg ml-32 mb-5 " data-aos="fade-right" ></div>
    <div className="regtangile4 w-32 h-1 rounded-lg bg-black ml-20" data-aos="fade-right" ></div>
    </div>
    </div>

    <div className="mr-10">
    <div className="regtangile5 absolute w-40 h-8 rounded-full ml-40 shadow-md shadow-gray-900"></div>
    <div className="absolute ml-36">
    <p className="about-header text-black text-5xl " >HELLO</p>
    <p className="who-ami text-black text-xl ml-20">Who am i</p>
    <div className="regtangile6 w-6 h-1 rounded-lg bg-white mt-5 ml-7 z-30 "></div>
    <div className="about-blackcircle w-14 h-14 rounded-full bg-transparent ml-36 border-2 border-black shadow-md shadow-gray-900 ">
    </div>
    </div>
    <p className="about-p absolute ml-36 text-black text-lg normal-case text-center">Web Developer and Senior Engineering student,  <br/>passionate in Technology and Programming <br/>field especially, had two years of experience <br/>in working as a front-end web developer, <br/> I am a fast learner,anda very good team player <br/>that can Build very complex designs <br/>and implement them easily.</p>
    </div>
    </div>
    </section>


)}
