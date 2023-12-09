
import React from 'react'
import Skills from './Skills';

const Experience = () => {
    return (
        <div id='experience' className='w-1/2 h-screen items-start justify-center flex flex-col gap-10 mx-14'>

            <h1 className='text-7xl text-black' >EXPERIENCE</h1>

            <div className='grid-cols-3 grid gap-10'>
                <ExperienceItem org='Equal' position='SDE-1' skills={["flutter", "java"]} info='Worked on Equal Identity Gateway' link="https://www.equal.in/" timeline='SEP 2023 - PRESENT' />
                <ExperienceItem org='Emint 1729' position='SDE-1' skills={["flutter",]} info='Worked on Emint mobile application and Main website' link="https://www.emint.co.in/" timeline='DEC 2022 - AUG 2023' />
                <ExperienceItem org='Kindly Health (YC W22)' position='SDE INTERN' skills={["flutter", "react",]} info='Worked on KindlyHis mobile application' link="https://www.kindlyhealth.com/" timeline='OCT 2022 - DEC 2022' />
                <ExperienceItem org='Tezsure' position='SDE INTERN' skills={["flutter", "c++"]} info='Part of the naan wallet 2.0 team and worked on various features including nft gallery,tezos news etc.' link="https://tezsure.com/" timeline='JULY 2021 - OCT 2022' />
                <ExperienceItem org='Credito' position='SDE INTERN' skills={["flutter", "firebase", "go"]} info='Developed the MVP credito app for sharing credit card with friends' link="https://farmako.in" timeline='DEC 2021 - JAN 2022' />
                <ExperienceItem org='Farmako Healthcare (YC S20)' position='SDE INTERN' skills={["flutter", "go"]} info='Worked on Clinic and Digital Lab Apps' link="https://farmako.in" timeline='JUN 2021 - MAR 2022' />
            </div>
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
            <a href={props.link}> <h2>{props.org}</h2></a>
            <h3 className='mr-4 font-semibold'>{props.position} </h3>
            <p>{props.info}</p>
            <div className='flex'>
                {
                    props.skills.map((e) => <div key={"experience"} className='border border-black mr-1 my-2 px-2 justify-center items-center uppercase leading-tight text-xs'>{e}</div>)
                }
            </div>
        </div>
    )
}

export default Experience