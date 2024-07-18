import demoImg from '../assets/img/demo/demo-1.jpg'


const Testimonials = () => {
  return (
    <div className="flex flex-col">
    {/* header */}
    <div className="flex w-full bg-white justify-center py-64 sm:py-[120px] border-b-2">
      <div className="flex flex-col items-center w-full max-w-[550px]">
        <h1 className="mt-8 text-[#495153] text-6xl font-light">Testimonials</h1>
        <span className="text-xl  text-[#495153] font-light mt-32">What is Everyone Saying?</span>
      </div>
    </div>
    {/* grid */}
    <ul className="grid w-full">
      <li className="flex flex-row items-start">
        <img src={demoImg} alt="demo" className="w-1/2" />
        <div className="container flex w-1/2 justify-center items-start h-full bg-white">
          <div className="flex flex-col items-center flex-s p-64 h-full justify-center">
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">My mom had just passed away from cancer and I was dealing with an enormous amount of grief, on top of all of my other mental issues. I have terrible sciatica and injuries from sports so I am in constant pain. Shaman Asher truly is completely connected and I felt the realignments happening within my body, the pain leaving my hips, my neck, and my head especially as he worked with me. At the end of the session, I felt pain-free in every way, with clarity in my head and that’s always a mess. Afterward, the best and most productive weeks I had in years were presented to me. He was able to heal physical pain no doctor has been able to make any better, I highly recommend Shaman Asher! 
            </span>
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
            - Lauren Kranz
            </span>
          </div>
        </div>
      </li>

      <li className="flex items-start flex-row-reverse">
        <img src={demoImg} alt="demo" className="w-1/2" />
        <div className="container flex w-1/2 justify-center items-start h-full bg-white">
          <div className="flex flex-col items-center flex-s p-64 h-full justify-center">
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </span>
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
            - Test Author
            </span>
          </div>
        </div>
      </li>

      {/*  double */}
      <li className="flex flex-row">
       <div className="flex flex-row">
       <img src={demoImg} alt="demo" className="w-1/2" />
        <div className="container flex w-1/2 justify-center items-start h-full bg-white">
          <div className="flex flex-col items-center flex-s p-64 h-full justify-center">
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </span>
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
            - Test Author
            </span>
          </div>
        </div>
       </div>
       <div className="flex flex-row">
       <img src={demoImg} alt="demo" className="w-1/2" />
        <div className="container flex w-1/2 justify-center items-start h-full bg-white">
          <div className="flex flex-col items-center flex-s p-64 h-full justify-center">
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co
              nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </span>
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
            - Test Author
            </span>
          </div>
        </div>
       </div>
      </li>
      {/* end double */}

      <li className="flex items-start">
        <img src={demoImg} alt="demo" className="w-1/2" />
        <div className="container flex w-1/2 justify-center items-start h-full bg-white">
          <div className="flex flex-col items-center flex-s p-64 h-full justify-center">
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            </span>
            <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
            - Test Author
            </span>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
  )
}


export default Testimonials