
import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className="pl-8 pt-80 h-screen flex flex-col  mx-14">
            <div >
                <h1 className='text-2xl'>Let&apos;s Connect</h1>
                <div className='flex items-center justify-between my-2 w-[100px]'>

                    <div className='py-2 cursor-pointer ' >
                        <a href="https://www.linkedin.com/in/goutham-srikar-316256172/">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className='py-2 cursor-pointer ' >
                        <a href="https://github.com/gouthamsrikar">
                            <FaGithub />
                        </a>
                    </div>
                    <div className='py-2 cursor-pointer ' >
                        <a href="https://www.instagram.com/goutham.srikar/">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className='py-2 cursor-pointer ' >
                        <a href="https://twitter.com/gouthamsrikar7">
                            <FaTwitter />
                        </a>
                    </div>

                </div>
                <div>
                </div>

                <h3>DIRECTIONS</h3>
                <a href={"https://goo.gl/maps/9fSSH8J5pnufXTDh9"}>
                    <h3>29° 51&apos; 53.298&apos;&apos; N  77° 53&apos; 47.6736&apos;&apos; E</h3>
                </a>

            </div>




        </div>
    )
}

export default Contact