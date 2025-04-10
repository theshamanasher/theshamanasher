import northernLights from "../assets/img/northern-lights.jpg";
import dreamImg from "../assets/img/dream.jpg";
import smudgeImg from "../assets/img/smudge.jpg";
import moonWaterImgTall from "../assets/img/moon-water-tall.jpg";
import chakaAlignmentImg from "../assets/img/chakra-alignment.jpg";

const services = [
  {
    title: "Chakra Alignment",
    image: chakaAlignmentImg,
    href: "/services/chakra-alignment/",
  },
  {
    title: "Shaman Blessed Moon Water",
    image: moonWaterImgTall,
    href: "/services/shaman-blessed-moon-water/",
  },
  {
    title: "Smudging - House Cleansing",
    image: smudgeImg,
    href: "/services/cleansing-and-protection/",
  },
  {
    title: "Dream Interpretation",
    image: dreamImg,
    href: "/services/dream-interpretation/",
  },
];

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
      {/* Hero Section */}
      <div
        className="flex w-full justify-center py-24 md:py-32 lg:py-48 border-b-2 bg-cover bg-center h-[250px] sm:h-[400px]"
        style={{
          backgroundImage: `linear-gradient(rgba(54, 153, 173, 0.8), rgba(0, 0, 0, 0.8)), url(${northernLights})`,
        }}
      >
        <div className="flex flex-col items-center w-full max-w-4xl px-6">
          <h1
            className="mt-6 text-[#aabcbf] text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
            style={textBorderStyle}
          >
            Sacred Services
          </h1>
          <span
            className="text-base md:text-lg text-[#aabcbf] mt-8 md:mt-12 text-center leading-relaxed max-w-2xl"
            style={textBorderStyle}
          >
            Transformative spiritual services blending ancient wisdom with
            modern practice
          </span>
        </div>
      </div>

      {/* Services Cards */}
      <div className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#aabcbf] text-center mb-12 md:mb-16">
            Featured Offerings
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2  gap-[32px]">
            {" "}
            {/* Changed to gap-8 (32px) */}
            {services.map((service, index) => (
              <li
                key={index}
                className="group relative bg-[#191919] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <a href={service.href}>
                  {/* Image Container */}
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <h3 className="absolute bottom-0 left-0 right-0 text-3xl font-medium text-[#aabcbf] p-6 md:p-8">
                      {service.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    <button className="w-full flex items-center justify-between py-4 px-6 bg-[#2c3e42]/50 hover:bg-[#36596b] rounded-lg transition-all duration-300">
                      <span className="text-[#aabcbf] text-sm font-medium">
                        Discover More
                      </span>
                      <svg
                        className="w-5 h-5 text-[#aabcbf]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#aabcbf]/20 pointer-events-none transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
