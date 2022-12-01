import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function Home() {



  return (
    <div className='bg-white '>
      <Head>
        <title>goutham srikar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-full w-full  bg-white '>
        <NavBar />
        <Swiper
          direction={"vertical"}
          // slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          width={window.innerWidth}
          height={1920}
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
  )
}