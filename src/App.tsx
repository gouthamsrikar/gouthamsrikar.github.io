import React, { useRef } from 'react';
import About from './components/About';
import Main from './components/Main';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function App() {

  const sliderRef = useRef<SwiperCore.SwiperRef>(null);

  const [bgColor, setBgColor] = useState(true)



  return (
    <div className="App">
      <div className='h-full w-full bg-white font-Grot' >
        <NavBar onchange={(i) => {
          sliderRef.current?.swiper.slideTo(i)
        }} />
        {/* <Main />
            <About /> */}



        <Swiper
          ref={sliderRef}
          direction={"vertical"}
          // slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          width={window.innerWidth}
          height={window.innerHeight}
          speed={1000}
          onChange={() => {
            if ((sliderRef.current?.swiper.activeIndex ?? 0) / 2 === 0) {
              setBgColor(false)
            } else {
              setBgColor(true)
            }
          }}
          onActiveIndexChange={(e) => { }}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Main />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Skills />
          </SwiperSlide>
          <SwiperSlide>
            <Experience />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}

export default App;
