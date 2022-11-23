import Link from 'next/link'
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
            {/* <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>

            </div> */}

            <div className='h-full'>

                <ul className='hidden md:flex justify-center px-5 py-7'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#experience'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>experience</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
                    </Link>
                </ul>


                <div onClick={handleNav} className='fixed right-0 md:hidden px-7 py-7 content-center h-full'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : "ease-in duration-300"}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-6 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-6 ease-in duration-500"}>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>making something people want always</p>
                    </div>
                    <div className='py-4'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>

                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contacts</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest'>Let`s connect</p>
                            <div className='flex items-center justify-between my-2 w-full sm:w-[50%]'>
                                <Link href="https://www.linkedin.com/in/goutham-srikar-316256172/">
                                    <div className='py-2 cursor-pointer'>
                                        <FaLinkedin />
                                    </div>
                                </Link>
                                <Link href="https://github.com/gouthamsrikar">
                                    <div className='py-2 cursor-pointer'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/goutham.srikar/">
                                    <div className='py-2 cursor-pointer'>
                                        <FaInstagram />
                                    </div>
                                </Link>
                                <Link href="https://twitter.com/gouthamsrikar7">
                                    <div className='py-2 cursor-pointer'>
                                        <FaTwitter />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar