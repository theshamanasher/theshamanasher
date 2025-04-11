import { useEffect, useRef, useState } from "react";

import "./App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/swiper.css";
//local imports
import ParallaxHero from "./components/ParallaxHero";
import heroImg from "./assets/img/demo/demo-hero.jpg";
import Title from "./components/Title";
import BlogGrid from "./components/BlogGrid";
// import Instagram from './components/Instagram';

import chakaAlignmentImg from "./assets/img/chakra-alignment.jpg";
import dreamImg from "./assets/img/dream.jpg";
import smudgeImg from "./assets/img/smudge.jpg";
import moonWaterImgTall from "./assets/img/moon-water-tall.jpg";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <>
      <div></div>
      <ParallaxHero
        title="The Shaman Asher"
        subtitle1="A Richmond based Ordained Shaman. "
        subtitle2="Providing in-person and Virtual Services."
        imageUrl={heroImg} // Replace with your image URL
      />

      <div className="flex flex-col mt-48 sm:mt-64">
        <Title
          title="Offerings"
          subtitle="Unique Approaches to Finding Balance"
        />
      </div>

      <div className="flex w-full m-auto mt-32 sm:mt-64 h-full max-h-[400px] max-w-[1114px] px-8">
        <div className="relative w-full">
        {swiperReady && (
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          scrollbar={{ draggable: true }}
          className="h-full max-w-[90%]"
          onSwiper={(swiper) => {
            // Re-initialize navigation after refs are set
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          >
            <SwiperSlide>
              <p className="my-8 text-[#aabcbf] font-light text-center">
                Chakra Alignment
              </p>
              <a href="/services/chakra-alignment/">
                <img className="w-full" src={chakaAlignmentImg} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <p className="my-8 text-[#aabcbf] font-light text-center">
                Dream Interpretation
              </p>
              <a href="/services/dream-interpretation/">
                <img className="w-full" src={dreamImg} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <p className="my-8 text-[#aabcbf] font-light text-center">
                Smudging - Cleansing Renewing Protecting
              </p>
              <a href="/services/cleansing-and-protection/">
                <img className="w-full" src={smudgeImg} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <p className="my-8 text-[#aabcbf] font-light text-center">
                Shaman Blessed Moon Water
              </p>
              <a href="/services/shaman-blessed-moon-water/">
                <img className="w-full" src={moonWaterImgTall} />
              </a>
            </SwiperSlide>
          </Swiper>
          )}

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-20 pointer-events-none">
            <button
              ref={prevRef}
              className="custom-prev bg-white/30 p-2 rounded-full hover:bg-white/50 pointer-events-auto ml-2"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="custom-next bg-white/30 p-2 rounded-full hover:bg-white/50 pointer-events-auto mr-2"
            >
              <svg
                className="w-8 h-8 text-white"
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
        </div>
      </div>

      {/* <div className="flex flex-col mt-48 sm:mt-64">
      <Instagram />
    </div> */}

      <div className="flex flex-col mt-48 sm:mt-64">
        <Title title="Recent Blog Posts" />
      </div>

      <BlogGrid />
    </>
  );
}

export default App;
