import React from "react";

function Footer() {
  return (
    <div className="max-w-screen-2xl h-auto sm:h-[120vh] bg-[#070707] sm:py-12 sm:px-32 py-16 px-4 text-white/80 relative">
      <div className="flex flex-wrap justify-between items-center mb-16">
        {/* Text Section */}
        <div className="w-full md:w-[40%] px-4">
          <h3 className="text-5xl sm:text-[20vh] sm:leading-[20vh] font-bold">
            Our Story
          </h3>
          <p className="mt-5 sm:mt-12 sm:text-3xl text-lg leading-relaxed">
            The Story behind Exo Ape is one of <br />
            exploration, creativity and curiosity.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-[55%] mt-10 md:mt-0 md:ml-4 overflow-hidden rounded-lg">
          <video
            muted
            autoPlay
            loop
            className="w-full h-full object-cover rounded-lg"
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
      </div>
      <div className="border-t-2  sm:p-20 pt-12">
        <div className="flex sm:justify-between gap-10">
          <div>
            <p className="text-m hidden sm:block cursor-pointer">
              Willem || Singel 8 <br />
              6041 HS, Roermond <br />
              The Netherlands <br />
              hello@exoape.com
            </p>
          </div>
          <div>
            <p className="text-m block cursor-pointer">
              Work
              <br />
              Studio
              <br />
              News <br />
              Contact
            </p>
          </div>
          <div>
            <p className="text-m block cursor-pointer">
              Behance <br />
              Dribbble
              <br />
              Linkedin
              <br />
              Instagram
            </p>
          </div>
        </div>
        <div className="sm:text-2xl text-xl mt-18 sm:mt-16 text-center">
          <p>Clone ©️ by Vishal Kumar</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
