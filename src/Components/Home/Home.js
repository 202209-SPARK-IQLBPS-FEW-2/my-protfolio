import React from 'react';
import './Home.css';
import Pic1 from './homeimages/1.png';
import Pic2 from './homeimages/2.png';
import Pic3 from './homeimages/3.png';
import Pic4 from './homeimages/4.png';
import Traingle1 from './homeimages/traingle1.png';
import Traingle2 from './homeimages/traingle2.png';
import Traingle3 from './homeimages/traingle3.png';
import Traingle4 from './homeimages/traingle4.png';
import Traingle5 from './homeimages/traingle5.png';
import Regtangle1 from './homeimages/regtangle1.png';
import Aboutphoto1 from './homeimages/section1ph1.png';
import Aboutphoto2 from './homeimages/section1ph2.png';
import Blogphoto1 from './homeimages/section2ph1.png';
import Blogphoto2 from './homeimages/section2ph2.png';



export default function Home() {

return (
<div>


<div className="slider relative ">

<div>
  <img className="slider-imagees1  bg-cover "  src={Traingle1}/>
  <img className="slider-imagees2   bg-cover " src={Traingle2}/>

      </div>

  <button className="slider-button ml-20 px-12 py-3 text-white text-2xl font-bold  rounded-full absolute z-50 transform hover:scale-105" >تعرف علينا</button>
        <input type="radio" name="slider" title="slide1" checked="checked" className="slider__nav ml-auto  " />
        <input type="radio" name="slider" title="slide2" className="slider__nav  " />
        <input type="radio" name="slider" title="slide3" className="slider__nav " />
        <input type="radio" name="slider" title="slide4" className="slider__nav mr-10 " />


<div className="slider__inner ">

    <div className="slider__contents bg-cover  ">
     <img  src={Pic1} alt="logo" />
    </div>

    <div className="slider__contents bg-cover" >
    <img  src={Pic2} alt="logo" />
    </div>
    <div className="slider__contents bg-cover  " >
     <img src={Pic3} alt="logo" />
    </div>
    <div className="slider__contents bg-cover  " >
     <img src={Pic4} alt="logo" />
    </div>
</div>

</div>


<div className="mt-24">
<div className="flex justify-center ml-20 ">
<p className="font-style text-black text-6xl ">نبذة عنا</p>
<p className="absolute font-style2  text-6xl ">ة</p>
<p className="absolute mr-32 ml-2 font-style2   text-6xl ">نا</p>
</div>

<div className="flex ml-32 justify-between w-auto h-80 mt-32">
<div>
  <div className="hover-div h-72   bg-orange-600 opacity-60 absolute ">
  </div>
  <img className="object-cover  w-80 h-72 " src={Aboutphoto1} />
  <img className="Aboutphoto2 object-cover absolute  w-96 h-64 ml-10" src={Aboutphoto2} />
  </div>

<div className=" ml-20 ">
<p className="font-style text-black text-center font-bold text-4xl ml-24">من نحن</p>
<div className="pl-60 pr-32 "><p className="font-style2 text-center mt-10  text-2xl">نيتروجين مراهنة على إقناعكم أنّ الكيمياء واحدة من أمتع الأشياء بالحياة</p></div>
<div className="flex justify-center"><button className="slider-button  shadow-lg shadow-gray-500 px-12 py-3 ml-24 mt-10 text-white text-2xl font-bold  rounded-full absolute z-50 transform hover:scale-105" >أضغط للمزيد</button></div>
</div>

</div>
</div>



<div className="mt-24 mr-32 mb-44 ">

<div className="flex  justify-around w-auto h-80 mt-32">

<div className=" mt-10 mr-52">
<div className="flex justify-center  ">
<p className="font-style text-black text-center font-bold text-4xl ">منو ماري كوري؟</p>
<p className="font-style2 absolute  -ml-44  font-bold text-4xl ">؟</p>
</div>
<div className="ml-32 mr-32 "><p className="font-style text-gray-500 text-center mt-10  text-2xl">ماري كوري هي الإنسان الوحيد الحاصل على جائزتي نوبل في الفيزياء والكيمياء</p></div>
<div className="flex justify-center"><button className="font-style2 shadow-lg shadow-gray-500  px-12 py-3  mt-10 text-2xl font-bold border border-black rounded-full absolute z-50 transform hover:scale-105" >تصفح هنا</button></div>
</div>

<div>
  <div className="hover-div2 h-72  -ml-10  bg-gray-400 opacity-60 absolute ">
  </div>
  <img className="object-cover  -ml-10 w-96 h-72 " src={Blogphoto2} />
  <img className="Aboutphoto2 object-cover absolute -mt-72 -ml-44 w-96 h-80 " src={Blogphoto1} />
  </div>

</div>
</div>



<div className="direction">

<div >
<img className="bg-cover absolute z-20 mt-7"  src={Traingle5}/>
<img className="bg-cover absolute z-30 mt-56"  src={Regtangle1}/>
</div>
<div >
  <img className="slider-imagees3  bg-cover "  src={Traingle3}/>
  <img className="slider-imagees4  bg-cover " src={Traingle4}/>
</div>

</div>


</div>


       )}
