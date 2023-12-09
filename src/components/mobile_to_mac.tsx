import React, { useState } from 'react'

interface MacToMobileProps {
    device: boolean
}

const MacToMobile = (props: MacToMobileProps) => {



    return (
        <div className={`group h-2/3 ${props.device ? 'w-[17rem] rounded-3xl border-4 shadow-2xl shadow-black' : 'w-2/3 border-8 rounded-3xl shadow-xl shadow-[#00000060]'} flex flex-col items-center justify-start bg-white transition-all duration-500 border-black bg-mac-wall bg-cover shadow-2xl `}>
            <div className={`${props.device ? 'w-24 rounded-full my-2' : 'w-32 rounded-none rounded-b-xl my-0'} bg-black flex items-center justify-end h-5 transition-all duration-200`}>
                <div className={`${!props.device ? 'hidden' : 'inline'} h-1 w-1 bg-green-400 rounded-full mx-2`}>

                </div>
            </div>
            <div className={`flex flex-col h-full items-center justify-center text-2xl text-black opacity-40`}>

                <div className={`text-center transition-all`}>
                    {props.device ? 'i - Phone' : <h1 className=''>
                        Hi, I&apos;m <span>Goutham</span>
                    </h1>}
                </div>
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