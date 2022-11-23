import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen xl:flex md:h-screen p-2 md:grid-cols-1 items-center p-16'>
             <img src="https://avatars.githubusercontent.com/u/53181084?v=4" alt="" className='xl:mx-5'/>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
                <div className='col-span-2 '>
                    <p className='py-3'>About me</p>
                    <h2>Who am I ?</h2>
                    <h3 className='py-3'>I'm a PANDA 🐼</h3>
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