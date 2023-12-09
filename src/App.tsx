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
import MacToMobile from './components/mobile_to_mac';
import Profile from './widget/Profile';
function App() {

  const sliderRef = useRef<SwiperCore.SwiperRef>(null);

  const [bgColor, setBgColor] = useState(true)

  const [index, setIndex] = useState(0)


  const [device, setDevice] = useState<boolean>(false);


  return (
    <div className="App">
      <div className='h-full w-fulll bg-white font-Grot items-center' >
        {/* <NavBar onchange={(i) => {
          sliderRef.current?.swiper.slideTo(i)
        }} /> */}


        <div className='flex flex-col gap-8 w-full h-screen items-end justify-center fixed '>
          <div className={`${device ? 'w-1/2' : 'w-full'} h-full flex flex-col gap-8 items-center justify-center transition-all duration-1000`}>
            <MacToMobile device={device} index={index} />
            <div className='text-black opacity-50 flex text-center'>
              Created by AmSrik
            </div>
          </div>
        </div>

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

            // if ((sliderRef.current?.swiper.activeIndex ?? 0) > 1) {
            //   setDevice(!device);
            // } else {
            //   setDevice(!device);
            // }

          }}
          onActiveIndexChange={(e) => {
            console.log(e.activeIndex)
            setIndex(e.activeIndex)
            if ((e.activeIndex ?? 0) > 0) {
              setDevice(true);
            } else {
              setDevice(false);
            }

          }}
          modules={[Mousewheel]}
          className="mySwiper"
        >

          {/* <SwiperSlide>
            <div className='flex flex-col gap-8 h-screen w-screen items-center justify-center sticky'>
              <MacToMobile device={device} />
              <div className='text-black opacity-50'>
                Create by AmSrik
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className='h-screen w-screen' />
          </SwiperSlide>
          {/* <SwiperSlide>
            <Main />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <About />
          </SwiperSlide> */}
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
