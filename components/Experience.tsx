import Link from 'next/link';
import React from 'react'
import Skills from './Skills';

const Experience = () => {
    return (
        <div id='experience' className='w-full md:h-screen items-center grid-cols-1 p-8'>
            <div className='h-20'></div>
            <h1 >EXPERIENCE</h1>
            <div className='py-2 items-stretch'></div>
            <ExperienceItem org='Farmako Healthcare (YC S20)' position='SDE INTERN' skills={["flutter", "go"]} info='Worked on Clinic and Digital Lab Apps' link="https://farmako.in" />
            <ExperienceItem org='Credito' position='SDE INTERN' skills={["flutter", "firebase", "go"]} info='Developed the MVP credito app for sharing credit card with friends' link="https://farmako.in" />
            <ExperienceItem org='Tezsure' position='SDE INTERN' skills={["flutter", "c++"]} info='Part of the naan wallet 2.0 team and worked on various features including nft gallery,tezos news etc.' link="https://tezsure.com/" />
            <ExperienceItem org='Kindly Health (YC W22)' position='SDE INTERN' skills={["flutter", "react",]} info='Worked on KindlyHis mobile application' link="https://www.kindlyhealth.com/" />
        </div>
    )
}

type ExperienceItemProps = {
    org: string
    position: string
    link: string
    info: string
    skills: string[]
}

const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div className='my-3'>
            <Link href={props.link}> <h2>{props.org}</h2></Link>
            <h3>{props.position}</h3>
            <p>{props.info}</p>
            <div className='flex'>
                {
                    props.skills.map((e) => <div key={"experience"} className='border border-black mr-1 my-2 px-1 justify-center items-center uppercase'><h6>{e}</h6></div>)
                }
            </div>
        </div>
    )
}

export default Experience