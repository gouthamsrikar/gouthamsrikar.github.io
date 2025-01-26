import React from 'react'



const MobilePage = () => {
    return (
        <div className='h-screen w-screen text-center flex items-center justify-center text-[#2d33cd]'
            style={{
                backgroundImage: `url(${require('./assets/hero_desktop.webp')})`,
                backgroundSize: "cover", // Adjust as needed
                backgroundPosition: "center", // Center the image
            }}
        >
            Open in desktop browser for better experience
        </div>
    )
}

export default MobilePage