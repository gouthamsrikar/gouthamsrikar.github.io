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

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEbbKOLGODxSXYnxbIG9hpQqYGmJ18Fcs",
  authDomain: "gouthamsrikar-github-io.firebaseapp.com",
  projectId: "gouthamsrikar-github-io",
  storageBucket: "gouthamsrikar-github-io.appspot.com",
  messagingSenderId: "978638403419",
  appId: "1:978638403419:web:c4e7f321e621fde759cc7e",
  measurementId: "G-Q1EQ20P9XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  const sliderRef = useRef<SwiperCore.SwiperRef>(null);

  const [bgColor, setBgColor] = useState(true)

  const [index, setIndex] = useState(0)


  const [device, setDevice] = useState<boolean>(false);

  const eventMap =
    new Map<number, string>([
      [0, 're_visited'],
      [1, 'skills'],
      [2, 'experience'],
      [3, 'contact']
      ,],)





  useEffect(() => {

    // fetch('https://geolocation-db.com/json/')
    //   .then(response => response.json())
    //   .then(data => {
    //     logEvent(analytics, "visited", {
    //       'ip_address': data.IPv4,
    //       'country_name': data.country_name,
    //       'latitude': data.latitude,
    //       'longitude': data.longitude
    //     })
    //   })
    //   .catch(error => {
    //     logEvent(analytics, "visited",)
    //   })

    logEvent(analytics, "visited",)


  })



  return (



    < div className="App" >
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
            logEvent(analytics, e.activeIndex === 0 ? 're_visited' : e.activeIndex === 1 ? 'skills' : e.activeIndex === 2 ? 'experience' : 'contact')
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

    </div >
  );
}

export default App;
