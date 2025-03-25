import demoImg from '../assets/img/demo/demo-1.jpg'


const Services = () => {
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
        <div className="flex flex-col items-center w-full max-w-[550px] px-16">
          <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light">Services</h1>
          <span className="text-base  text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
        </div>
      </div>
      {/* grid */}
      <ul className="grid w-full">


        <li className="flex flex-col sm:flex-row items-start ">
          <img src={demoImg} alt="demo" className="w-full sm:w-1/2" />
          <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">TITLE</h2>
              <div className="flex flex-col gap-32 items-center h-full">
                <span className="text-base  text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </span>
                {/* <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16 w-fit text-white">Contact</a> */}
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row-reverse items-start">
          <img src={demoImg} alt="demo" className="w-full sm:w-1/2" />
          <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">TITLE</h2>
              <div className="flex flex-col gap-32 items-center h-full">
                <span className="text-base  text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </span>
                {/* <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16 w-fit text-white">Contact</a> */}
              </div>
            </div>
          </div>
        </li>



        <li className="flex flex-col sm:flex-row items-start ">
          <img src={demoImg} alt="demo" className="w-full sm:w-1/2" />
          <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">TITLE</h2>
              <div className="flex flex-col gap-32 items-center h-full">
                <span className="text-base  text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </span>
                {/* <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16 w-fit text-white">Contact</a> */}
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row-reverse items-start">
          <img src={demoImg} alt="demo" className="w-full sm:w-1/2" />
          <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
            <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">TITLE</h2>
              <div className="flex flex-col gap-32 items-center h-full">
                <span className="text-base  text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </span>
                {/* <a href="{}" className="flex items-center mt-auto border rounded-md py-[10px] px-16 w-fit text-white">Contact</a> */}
              </div>
            </div>
          </div>
        </li>

       

      </ul>
    </div>
  )
}

export default Services