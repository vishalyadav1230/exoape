import {motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function Spread() {
  const ref = useRef(null);
  const mobileref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isInViev = useInView(mobileref, { once: true, amount: 0.5 });

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
        <div className="svg flex justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="font-semibold">In the media</h3>
        </div>
        <div className="text mt-10 text-center">
           <h1 ref={ref} className='text-6xl sm:text-9xl tracking-tighter'>
                 <motion.span className="inline-block"
                   initial={{y: "100%", opacity: 0}}
                   animate={isInView ? {y: 0, opacity: 1} : {}}
                   transition={{
                    ease: "easeOut",
                    duration: 1.2
                   }}
                 >Spread</motion.span>
             </h1>
           <h1 ref={ref} className='text-6xl sm:text-9xl tracking-tighter'>
                 <motion.span className="inline-block"
                   initial={{y: "100%", opacity: 0}}
                   animate={isInView ? {y: 0, opacity: 1} : {}}
                   transition={{
                    ease: "easeOut",
                    duration: 1.2
                   }}
                 >The news</motion.span>
             </h1>
          <p className="text-center text-xl sm:text-2xl tracking-tight mt-8 w-2/3 mx-auto">
            Find out more about our work on these <br /> leading design and
            technology platforms.
          </p>
          <a
            className="sm:text-xl sm:mt-20 border-b-[1px] tracking-tighter text-lg leading-none font-semibold border-zinc-900 pb-.2px mt-8 inline-block"
            href="#"
          >
            Browser all news
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
