import northernLights from '../assets/img/northern-lights.jpg';
import dreamImg from '../assets/img/dream.jpg'; 
import smudgeImg from '../assets/img/smudge.jpg'; 
import moonWaterImg from '../assets/img/moon-water.jpg'; 



const textBorderStyle: React.CSSProperties = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000
  `,
};


const Services = () => {

  
  return (
    <div className="flex flex-col">
      {/* Header section with background image */}
      <div 
        className="flex w-full justify-center py-64 sm:py-[120px] border-b-2 bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(54, 153, 173, 0.8), rgba(0, 0, 0, 0.8)), url(${northernLights})`,
        }}
      >
        <div className="flex flex-col items-center w-full max-w-[550px] px-16">
          <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light" style={textBorderStyle}>Services</h1>
          <span className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light" style={textBorderStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </span>
        </div>
      </div>

      {/* Services grid */}
      <ul className="grid w-full">
        <li className="flex flex-col sm:flex-row items-start group">
          <div  className="flex flex-col sm:flex-row items-start border-2 border-transparent group-hover:border-2">
            <img src={moonWaterImg} alt="demo" className="w-full sm:w-1/2" />
            <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
              <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
                <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">Shaman Blessed Moon Water</h2>
                <div className="flex flex-col gap-32 items-center h-full">
                  <span className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row-reverse items-start group">
          <div className="flex flex-col sm:flex-row-reverse items-start border-2 border-transparent group-hover:border-2">
            <img src={smudgeImg} alt="demo" className="w-full sm:w-1/2" />
            <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
              <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
                <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">Smudging - House Cleansing and Protection</h2>
                <div className="flex flex-col gap-32 items-center h-full">
                  <span className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col sm:flex-row items-start group">
          <div className="flex flex-col sm:flex-row items-start border-2 border-transparent group-hover:border-2">
            <img src={dreamImg} alt="demo" className="w-full sm:w-1/2" />
            <div className="container flex w-full sm:w-1/2 justify-center items-center h-full bg-[#191919]">
              <div className="flex flex-col items-center flex-s justify-start p-32 sm:p-64 h-full max-h-[550px]">
                <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#aabcbf] text-center leading-relaxed font-light">Dream Interpretation</h2>
                <div className="flex flex-col gap-32 items-center h-full">
                  <span className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">
                    Dreams are powerful, sacred messages from the subconscious, often offering profound insight, guidance, and healing. 
                    I offer Dream Interpretation services to help you decode the messages hidden within your dreams. 
                    Whether vivid or fleeting, dreams hold valuable clues about your inner world, spiritual journey, and emotional state.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;