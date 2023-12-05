import React from 'react'

const About = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <p className='font-Grot font-normal text-5xl pt-40'>
                About me
            </p>
            <div id='about' className='w-full xl:flex  md: items-center px-20 justify-around'>
                {/* <img src="https://avatars.githubusercontent.com/u/53181084?v=4" alt="" className='xl:mx-5' /> */}
                <img src={require('../assets/me.jpg')} alt="" className='w-1/4' />
                <img src={require('../assets/me2.jpg')} alt="" className='w-1/3' />
                <img src={require('../assets/me3.jpg')} alt="" className=' w-1/4' />
            </div>
            <p className='font-Grot font-normal'>
                I am The Traveller
            </p>
        </div>
    )
}

type AboutImageItemProps = {
    img: string
    width: string
}


export const AboutImage = (props: AboutImageItemProps) => {
    return (
        <img src={require('../assets/me.jpg')} alt="" className='w-1/4' />
    )
}


export default About