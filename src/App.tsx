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

import demo1 from './assets/img/demo/demo-1.jpg'
import demo2 from './assets/img/demo/demo-2.jpg'
import demo3 from './assets/img/demo/demo-3.jpg'
import demo4 from './assets/img/demo/demo-4.jpg'



function App() {
  return (
    <>
    <div></div>
    <ParallaxHero 
        title="The Shaman Asher" 
        subtitle="Yoga, Reiki, Breathwork, Retreats, Events,"
        imageUrl={heroImg} // Replace with your image URL
    />

    <div className="flex flex-col mt-48 sm:mt-64">
      <Title 
        title="Offerings" 
        subtitle="Unique Approaches to Finding Balance" 
      />
    </div>

    <div className="flex w-full  m-auto mt-64 max-w-screen-xxl">
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
          <img className='w-full' src={demo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={demo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={demo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={demo4} />
        </SwiperSlide>
      </Swiper>
    </div>

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
