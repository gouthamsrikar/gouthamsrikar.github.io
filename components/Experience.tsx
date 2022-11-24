import Link from 'next/link';
import React from 'react'
import Skills from './Skills';

const Experience = () => {
    return (
        <div id='experience' className='w-full md:h-screen items-center grid-cols-1 p-8'>
            <div className='h-20'></div>

            <img className='md:hidden' src="https://cdnb.artstation.com/p/assets/images/images/056/447/131/large/goutham-srikar-asset.jpg?1669256740" alt="" />
            <div className='h-5'></div>
            <h1 >EXPERIENCE</h1>
            <div className='py-2 items-stretch'></div>
            <ExperienceItem org='Farmako Healthcare (YC S20)' position='SDE INTERN' skills={["flutter", "go"]} info='Worked on Clinic and Digital Lab Apps' link="https://farmako.in" timeline='JUN 2021 - MAR 2022' />
            <ExperienceItem org='Credito' position='SDE INTERN' skills={["flutter", "firebase", "go"]} info='Developed the MVP credito app for sharing credit card with friends' link="https://farmako.in" timeline='DEC 2021 - JAN 2022' />
            <ExperienceItem org='Tezsure' position='SDE INTERN' skills={["flutter", "c++"]} info='Part of the naan wallet 2.0 team and worked on various features including nft gallery,tezos news etc.' link="https://tezsure.com/" timeline='JULY 2021 - OCT 2022' />
            <ExperienceItem org='Kindly Health (YC W22)' position='SDE INTERN' skills={["flutter", "react",]} info='Worked on KindlyHis mobile application' link="https://www.kindlyhealth.com/" timeline='OCT 2021 - PRESENT' />
        </div>
    )
}

type ExperienceItemProps = {
    org: string
    position: string
    link: string
    info: string
    skills: string[]
    timeline: string
}

const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div className='my-3'>
            <Link href={props.link}> <h2>{props.org}</h2></Link>
            <h3 className='mr-4 font-semibold'>{props.position} </h3>
            <p>{props.info}</p>
            <div className='flex'>
                {
                    props.skills.map((e) => <div key={"experience"} className='border border-black mr-1 my-2 px-1 justify-center items-center uppercase text-xs'>{e}</div>)
                }
            </div>
        </div>
    )
}

export default Experience