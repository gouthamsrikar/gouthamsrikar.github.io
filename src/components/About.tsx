import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full xl:flex h-screen md: items-center p-20 justify-items-center'>
            <div className='h-20'></div>
            <img src="https://avatars.githubusercontent.com/u/53181084?v=4" alt="" className='xl:mx-5'/>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
                <div className='col-span-2 '>
                    <p className='py-3 text-4xl'>About me</p>
                    <h2>Who am I ??</h2>
                    <h3 className='py-3 text-2xl'>I&apos;m a PANDA 🐼</h3>
                    <p>
                        I am currently in final year of
                        Applied Mathematics at IIT ROORKEE.
                        Similar to PANDA🐼 I spend my day with coding👨‍💻 and drinking coke🥤.
                        Apart from coding and food I also like art🎨 and photography📸.
                        Fan of weeknd and nils frahm🎹.I love trekking🌄 too.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About