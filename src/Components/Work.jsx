import {motion, useInView } from "framer-motion";
import { useRef } from "react";

function Work() {

  
  const ref = useRef(null);
  const mobileref = useRef(null);

  const isInView = useInView(ref, {once: true, amount: 0.5})
  const isInViev = useInView(mobileref, {once: true, amount: 0.5})


  return (
    <>
       <div className='w-full relative hidden sm:inline'>
        <div className='max-w-screen-2xl py-20 mx-auto px-5 sm:px-42'>
            <h1 ref={ref} className='text-6xl mt-6 sm:text-[16vw] sm:font-semibold'>
                 <motion.span className="inline-block"
                   initial={{y: "100%", opacity: 0}}
                   animate={isInView ? {y: 0, opacity: 1} : {}}
                   transition={{
                    ease: "easeOut",
                    duration: 1.2
                   }}
                 >Work</motion.span>
             </h1>


            <div className='sm:h-[130vh] w-full flex justify-between gap-42 mt-20'>
              <div className='sm:h-[100vh] w-[60%]'>
                <video data-scroll data-speed-scroll="-.5" muted autoPlay loop className='h-full w-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"></video>
              </div>
              <div className='h-auto w-[50%]'>
                 <div className='featured flex gap-2 mt-5'>
                   <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                   <h3 className='font-medium'>Featured Projects</h3>
                  </div>
                 <p className='my-10 text-2xl font-sans'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                 <div className='sm:w-[80%] mt-52'>
                  <video data-scroll data-speed-scroll="-.5" muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"></video>
                 </div>
              </div>
            </div>

            <div className='sm:h[130vh] flex justify-between gap-32 w-full'>
               <div className='sm:w-[30%] mt-96'>
                 <video data-scroll data-speed-scroll="-.5" muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
               </div>
               <div className='sm:h-[90vh] w-[40%] my-12 ml-28'>
                <video data-scroll data-speed-scroll="-.5" muted autoPlay loop className='h-full w-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
                <p className='sm:text-xl sm:mt-20 border-b-[1px] tracking-tighter text-lg leading-none font-semibold border-zinc-900 pb-.2px inline-block'>Browse all work</p>
              </div>
            </div>
           
        </div>

    </div>

      {/* phone ke liye  */}

    <div className='w-full relative inline sm:hidden'>
       <div className='max-w-screen-2xl py-12 mx-auto px-5 sm:px-42'>
           <div className='featured flex gap-2 mt-5'>
                   <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 text-orange-500" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                   <h3 className='font-medium'>Featured Projects</h3>
            </div>
             <h1 ref={mobileref} className='text-6xl mt-6'>
                 <motion.span className="inline-block"
                   initial={{y: "100%", opacity: 0}}
                   animate={isInViev ? {y: 0, opacity: 1} : {}}
                   transition={{
                    ease: "easeOut",
                    duration: 1.2
                   }}
                 >Work</motion.span>
             </h1>
            <div className='mt-5'>
                 <p className='text-xl tracking-tight'>Highlights of cases that we</p>
                 <p className='text-xl tracking-tight'>passionately built with forward-thinking</p>
                 <p className='text-xl tracking-tight'>clients and friends over the years.</p>
            </div>
            <div className='w-full flex flex-col gap-12 mt-8'>
               <video muted autoPlay loop className='h-full w-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"></video>
               <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"></video>
               <video muted autoPlay loop src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
               <video muted autoPlay loop className='h-full w-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
            </div>
            <div className='flex justify-center mt-10'>
             <p className='border-b-[1px] tracking-tighter text-lg leading-none font-semibold border-zinc-900 pb-.2px inline-block'>Browse all work</p>

            </div>
       </div>
    </div>



    </>
    
  )
}

export default Work;
