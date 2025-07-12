import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React from "react";

function Landing() {
  return (
    <div className="w-full h-[170vh] sm:h-[250vh] relative">
      <div className="picture h-full w-full overflow-hidden"> 
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="text max-w-screen-2xl mx-auto px-5  sm:px-30 h-full text-white">
          <div className="para mt-72 sm:mt-[30rem]">
            {["Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people", 
              "live, work, and unwind."].map((item, index)=>{
                return <p className="text-lg masker overflow-hidden font-semibold sm:text-2xl">
               <motion.span 
               initial={{rotate: 90, y: "100%", opacity:0}}
               animate={{rotate: 0, y: 0, opacity: 1}}
               transition={{ease: Power4.easeInOut, duration: .8, delay: index*.2}}
                className="origin-left inline-block">{item}</motion.span>
            </p>
              })}
          </div>
          <div className="Headings mt-4 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index)=>{
              return  <h1 className="text-6xl tracking-tighter leading-none sm:text-[16rem] ">
              <motion.span
               initial={{rotate: 90, y: "100%", opacity:0}}
               animate={{rotate: 0, y: 0, opacity: 1}}
               transition={{ease: Power4.easeInOut, duration: .8, delay:""}}
                className="inline-block origin-left">{item}</motion.span>
            </h1>
            })}
           
            
          </div>
          <div className="para2 mt-20 sm:w-1/2">
            <p className="text-lg font-semibold sm:text-2xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="sm:text-xl sm:mt-20 border-b-[1px] tracking-tighter text-lg leading-none font-semibold border-zinc-100 pb-.2px mt-6 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
