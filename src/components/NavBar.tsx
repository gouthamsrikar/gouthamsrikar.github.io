
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] items-center bg-white'>
            <div className='h-full'>

                <ul className='hidden md:flex justify-center px-5 py-7'>
                    <a href='/' >
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </a>
                    <a href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </a>
                    <a href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </a>
                    <a href='/#experience'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>experience</li>
                    </a>
                    {/* <a href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </a> */}
                    <a href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
                    </a>
                </ul>


                <div onClick={handleNav} className='fixed right-0 md:hidden px-7 py-7 content-center h-full'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : "ease-in duration-300 bg-transparent"}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-6 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-6 ease-in duration-500"}>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='rounded-full shadow-lg hover:rotate-90  transition duration-1000 shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose  />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>building something people want</p>
                    </div>
                    <div className='py-4'>
                        <ul className='uppercase'>
                            <a href='/' onClick={handleNav}>
                                <li className='py-4 text-sm'>Home</li>
                            </a>
                            <a href='/#about' onClick={handleNav}>
                                <li className='py-4 text-sm'>About</li>
                            </a>

                            <a href='/#skills' onClick={handleNav}>
                                <li className='py-4 text-sm'>Skills</li>
                            </a>

                            <a href='/#experience' onClick={handleNav}>
                                <li className='py-4 text-sm'>experience</li>
                            </a>
                            <a href='/#contact'>
                                <li className='py-4 text-sm'>Contacts</li>
                            </a>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest'>Let`s connect</p>
                            <div className='flex items-center justify-between my-2 w-full sm:w-[50%]'>
                                <a href="https://www.linkedin.com/in/goutham-srikar-316256172/">
                                    <div className='py-2 cursor-pointer'>
                                        <FaLinkedin />
                                    </div>
                                </a>
                                <a href="https://github.com/gouthamsrikar">
                                    <div className='py-2 cursor-pointer'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/goutham.srikar/">
                                    <div className='py-2 cursor-pointer'>
                                        <FaInstagram />
                                    </div>
                                </a>
                                <a href="https://twitter.com/gouthamsrikar7">
                                    <div className='py-2 cursor-pointer'>
                                        <FaTwitter />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar