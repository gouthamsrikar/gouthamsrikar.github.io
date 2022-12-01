import React from 'react';
import About from './components/About';
import Main from './components/Main';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
function App() {
  return (
    <div className="App">
       <div className='h-full w-full  bg-white '>
        <NavBar />
        <Swiper
          direction={"vertical"}
          // slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          width={window.innerWidth}
          height={window.innerHeight}
          speed={1000}
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
