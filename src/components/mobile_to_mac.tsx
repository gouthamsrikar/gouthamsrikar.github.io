import React, { useEffect, useRef, useState } from 'react'
import AppGrid from '../widget/AppGrid';
import Profile from '../widget/Profile';
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";


interface MacToMobileProps {
    device: boolean
    index: number
}

const MacToMobile = (props: MacToMobileProps) => {

    const sliderRef = useRef<SwiperCore.SwiperRef>(null);
    const frameRef = useRef<HTMLDivElement>(null);

    const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined)


    useEffect(() => {
        sliderRef.current?.swiper.slideTo(props.index)
    }, [props.index])


    return (
        <div ref={frameRef} className={`h-2/3 ${props.device ? 'w-[17rem] rounded-3xl border-4 shadow-2xl shadow-black' : 'w-2/3 border-8 rounded-3xl shadow-xl shadow-[#00000060]'} flex flex-col items-center justify-start bg-white transition-all duration-500 border-black bg-mac-wall bg-cover shadow-2xl `}>
            <div className={`${props.device ? 'w-24 rounded-full my-2' : 'w-32 rounded-none rounded-b-xl my-0'} bg-black flex items-center justify-end h-5 transition-all duration-200`}>
                <div className={`${!props.device ? 'hidden' : 'inline'} h-1 w-1 bg-green-400 rounded-full mx-2`} />
            </div>
            <div className={`flex flex-col w-full transition-all h-full items-center justify-center text-2xl text-black overflow-hidden`}>

                <Swiper
                    ref={sliderRef}
                    direction={"vertical"}
                    // slidesPerView={1}
                    spaceBetween={0}
                    width={innerWidth}
                    mousewheel={true}
                    // width={window.outerWidth}
                    // height={window.outerHeight}
                    speed={1000}
                    onActiveIndexChange={(e) => {
                        setInnerWidth(frameRef.current?.clientWidth)
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-full flex flex-col items-center justify-center '>
                            <Profile />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full flex flex-col items-center justify-end '>
                            <AppGrid expanded={props.index === 1} bg={['bg-flutter', 'bg-dart', 'bg-golang', 'bg-cpp', 'bg-typescript', 'bg-next', 'bg-tailwind', 'bg-git',]} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full flex flex-col items-center justify-end '>
                            <AppGrid expanded={props.index === 2} bg={['bg-farmako', 'bg-tezsure', 'bg-kindly', 'bg-emint', '', '', '']} />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full flex flex-col items-center justify-center '>
                            <div className=' aspect-square h-14  bg-map rounded-lg bg-cover' />

                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
            <div className={`${props.device ? 'h-1 w-32 rounded-full' : 'h-16 p-2 w-2/3 rounded-lg'}  flex gap-2 bg-white opacity-30 my-2 transition-all`}>
                {/* <MacIcons bgurl={``} />
                <MacIcons bgurl={``} />
                <MacIcons bgurl={``} /> */}

            </div>
        </div>
    )
}

// interface MacIconsProps {
//     bgurl: string
// }


// const MacIcons = (props: MacIconsProps) => {
//     return (
//         <div className={`group-hover:h-12 group-hover:w-12 transition-all h-0 w-0 rounded-full group-hover:rounded-md bg-black`} + props.bgurl}>
//         </div>
//     )
// }


export default MacToMobile