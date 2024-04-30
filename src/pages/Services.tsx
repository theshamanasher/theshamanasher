import demoImg from '../assets/img/demo/demo-1.jpg'


const Services = () => {
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
        <div className="flex flex-col items-center w-full max-w-[550px]">
          <span className="text-xl  text-[#aabcbf] font-light">TheShamanAshers</span>
          <h1 className="mt-8 text-[#aabcbf] text-6xl font-light">Services</h1>

          <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
        </div>
      </div>
      {/* grid */}
      <ul className="grid w-full">
        <li className="flex flex-row items-start">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>

        <li className="flex items-start flex-row-reverse">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>

        <li className="flex flex-row items-start">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>

        <li className="flex items-start flex-row-reverse">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>

        <li className="flex flex-row items-start">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>

        <li className="flex items-start flex-row-reverse">
          <img src={demoImg} alt="demo" className="w-1/2" />
          <div className="container flex w-1/2 justify-center items-start h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-64 h-full">
              <h2 className="text-3xl sm:text-5xl text-[#aabcbf] mt-32 text-center leading-relaxed font-light">TITLE</h2>
              <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light">desc</span>


              <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16">Contact</a>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  )
}

export default Services