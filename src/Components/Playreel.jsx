import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  
    useEffect(() => {
     gsap.registerPlugin(ScrollTrigger);
       var tl = gsap.timeline({
           scrollTrigger: {
          trigger: parent.current,
          start: "top top", // Fixed from "top: '0 0'" to correct syntax
          pin: true,
          scrub: true, // Optional: Makes the animation smoother with scroll
        } 
       })
       tl.to(videodiv.current, {
        width: "100%",
        height: "100%",
        ease: "power4.out",
      },'a')
      .to(play.current,{
         x: "90%",
         scale: 1.2,    
         ease: "power4",
      },'a')
      .to(reel.current,{
        x: "-90%",
        scale: 1.2,
        ease: "power4",
      },'a')
      });
  
 
  return (
    <div ref={parent} className='w-full h-screen overflow-hidden relative bg-black'>
        <div ref={videodiv} className='w-40 sm:w-96 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <video muted loop autoPlay className='w-full h-full scale-[1.2]' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
       <div className='overlay absolute w-full h-full text-white flex flex-col justify-between py-20'>
          <div className='w-full flex items-center justify-center gap-2'>
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h3 className='font-semibold'>Work in motion</h3>
          </div>
          <h1 className='w-full flex justify-center gap-20 sm:gap-[45vw] items-center'>
            <div ref={play} className='text-5xl sm:text-9xl font-medium'>Play</div>
            <div ref={reel} className='text-5xl sm:text-9xl font-medium'>Reel</div>
          </h1>
          <div className='flex justify-center'>
             <p className='text-center px-10 text-xs sm:text-xl sm:w-1/3'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
          </div>
       </div>
    </div>
)
}

export default Playreel
