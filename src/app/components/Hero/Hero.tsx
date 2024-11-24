import React from "react";


const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/image/image01.png)] bg-cover"
  style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}} 
>
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[50px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-black">
          <div className="">
            <p >I am</p>
            <p >Hafsa</p>
            <p>Waqar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;