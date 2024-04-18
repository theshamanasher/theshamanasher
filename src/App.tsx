import './App.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//local imports
import ParallaxHero from './components/ParallaxHero';
import heroImg from './assets/img/demo/demo-hero.jpg'
import Title from './components/Title';
import BlogCard from './components/BlogCard';


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
          <img src="https://www.shutterstock.com/shutterstock/photos/1040229760/display_1500/stock-photo-pink-bright-texture-for-designer-background-gentle-classic-texture-colorful-background-colorful-1040229760.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg" />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>

    <div className="flex flex-col mt-48 sm:mt-64">
      <Title 
        title="Recent Blog Posts" 
      />
    </div>

    {/* blog section */}
    <div className="flex flex-wrap justify-center mt-10 gap-32"> 
      <BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />

<BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />

<BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />

<BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />

<BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />

<BlogCard 
        title="Test blog" 
        desc="This is a test blog"
        articleURL='/'
        imgURL='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
        />
    </div>

        
    </>
  )
}

export default App
