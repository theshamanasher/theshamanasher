import './App.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles/swiper.css'
//local imports
import ParallaxHero from './components/ParallaxHero';
import heroImg from './assets/img/demo/demo-hero.jpg'
import Title from './components/Title';
import BlogGrid from './components/BlogGrid';
// import Instagram from './components/Instagram';


import dreamImg from "./assets/img/dream.jpg";
import smudgeImg from "./assets/img/smudge.jpg";
import moonWaterImgTall from "./assets/img/moon-water-tall.jpg";



function App() {
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

    <div className="flex w-full  m-auto mt-32 sm:mt-64 h-full max-h-[400px] w-full max-w-[1114px]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
         <SwiperSlide>
          <a href="/services/dream-interpretation/">
            <img className='w-full' src={dreamImg} />
          </a>
        </SwiperSlide>
         <SwiperSlide>
          <a href="/services/cleansing-and-protection/">
            <img className='w-full' src={smudgeImg} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/services/shaman-blessed-moon-water/">
            <img className='w-full' src={moonWaterImgTall} />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>

    {/* <div className="flex flex-col mt-48 sm:mt-64">
      <Instagram />
    </div> */}

    <div className="flex flex-col mt-48 sm:mt-64">
      <Title 
        title="Recent Blog Posts" 
      />
    </div>

    <BlogGrid />
        
    </>
  )
}

export default App
