import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";

const Images = () => {
   var first = useRef(null);
   var second = useRef(null);
   var third = useRef(null);
   var fourth = useRef(null);
   var parent = useRef(null);
   
   useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 639px)", () => {
      // mobile
      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 3,
        }
     });
      tl.to(first.current,{
          x: "50%",
          ease: "power4.out",
      },'a')
      tl.to(second.current,{
         x: "-50%",
        ease: "power4.out",
      },'a')
       tl.to(third.current,{
         x: "-50%",
        ease: "power4.out",
      },'a')
       tl.to(fourth.current,{
         x: "50%",
        ease: "power4.out",
      },'a')
    })

    mm.add("(min-width: 640px)", () => {
      // desktop
      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 3,
        }
     });
      tl.to(first.current,{
          x: "60%",
          ease: "power4.out",
      },'a')
      tl.to(second.current,{
         x: "-40%",
        ease: "power4.out",
      },'a')
       tl.to(third.current,{
         x: "-40%",
        ease: "power4.out",
      },'a')
       tl.to(fourth.current,{
         x: "40%",
        ease: "power4.out",
      },'a')
    })

    return () => {
      mm.revert();
    }
   })

  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[100%] bg-white flex justify-center items-center overflow-hidden'>
       <div className='w-[40%] sm:w-[22%] sm:h-[70%] h-1/2 relative sm:my-32'>
       <div className='absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] -right-1/2 top-6'>
          <img ref={first} className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
       </div>
       <div className='absolute aspect-video w-30 sm:w-[20rem] sm:top-36 top-18 sm:-left-64 -left-25'>
         <video ref={second} muted loop autoPlay className='w-full h-full' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
       </div>
       <div className='absolute w-[9rem] sm:w-[24rem] aspect-video sm:-left-[120%] -left-[70%] sm:-bottom-[30%] -bottom-[10%]'>
          <img ref={third} className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
       </div>
       <div className='absolute  aspect-video sm:aspect-[3/2] h-32 sm:h-62 -right-[110%] sm:top-[32rem] top-52'>
           <video ref={fourth} muted loop autoPlay className='h-full w-full' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
       </div>
         <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
       </div>
    </div>
  )
}

export default Images;
