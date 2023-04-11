import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import background from './homeimages/background.png';
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Protofilo from "../Protofilo/Protofilo";
export default function Home() {

return (

  <section id="Home" className="navigation">
  <div  className="maindiv-height w-full bg-black">

<div  className="flex">
    <div className="main-div1 ml-auto">
      <div className="main-circle mt-44 w-96 h-96 rounded-full relative" ></div>
      <div className="protofilo-p2 absolute">
        <p className="text1 protofilo-p1 text-8xl text-white" data-aos="fade-right">PRO</p>
        <p className="text2 protofilo-p1 text-8xl text-white" data-aos="fade-left">TO</p>
        <p className="text3 protofilo-p1 text-8xl text-white" data-aos="fade-right">FILO</p>
        <div className="regtangile1 w-42 h-1 rounded-lg  mb-10 " data-aos="fade-right"></div>
        <div className="regtangile2 w-42 h-1 rounded-lg bg-white" data-aos="fade-right" ></div>
        <p className="name1 text-4xl  protofilo-p1 mt-40 z-30">ROKAYA AMJAAD</p>
        <p className="name2 text-4xl protofilo-p1  text-white ">ROKAYA AMJAAD</p>
        <div className="ml-60 " >
          <p className="click text-3xl protofilo-p1 capitalize ml-5 text-white ">Click</p>
          <p className="here1 text-3xl protofilo-p1 capitalize ml-10">Here</p>
          <p className="here2 text-3xl protofilo-p1 capitalize text-white ml-10">Here</p>
        </div>
      <Link to="https://github.com/rokayaamjaad/MY-resume.git"><div className="small-circle w-32 h-32 rounded-full bg-white opacity-30 ml-60 border-4 border-black hover:scale-125">
        </div></Link>
      </div>
    </div>

  <div className="main-div2">
    <img className="main-image" src={background} alt="background"/>
  </div>
  </div>

  </div>

<About/>

<Protofilo/>


<ContactUs/>


</section>




       )}
