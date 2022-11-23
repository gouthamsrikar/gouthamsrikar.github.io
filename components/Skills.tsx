import React from 'react'
import { IconType } from 'react-icons/lib'
import { SiFlutter, SiDart, SiReact, SiTailwindcss, SiCplusplus, SiGo, SiGit, SiFirebase, SiMongodb } from 'react-icons/si'


const Skills = () => {
    return (
        <div id='skills' className="items-center flex px-8 justify-between">

            <div className='w-[100%] h-screen'>
                <div className='h-20'></div>
                <h1 >SKILLS</h1>
                <div className='py-2'></div>
                <h3 >PROGRAMMING LANGUAGES</h3>
                <div className='py-2'>
                    <SkillItem title={"dart"} icon={SiDart} percentage={80} />
                    <SkillItem title={"go"} icon={SiGo} percentage={60} />
                    <SkillItem title={"c++"} icon={SiCplusplus} percentage={60} />
                </div>
                <div className='py-2'></div>
                <h3 className='py-1'>FRONTEND</h3>
                <div className='py-2'>
                    <SkillItem title={"flutter"} icon={SiFlutter} percentage={80} />
                    <SkillItem title={"react"} icon={SiReact} percentage={20} />
                    <SkillItem title={"tailwind css"} icon={SiTailwindcss} percentage={20} />
                </div>
                <div className='py-2'></div>

                <h3 >BACKEND</h3>
                <div className='py-2'>
                    <SkillItem title={"gofiber"} icon={SiGo} percentage={60} />
                    <SkillItem title={"gin"} icon={SiGo} percentage={60} />
                </div>
                <div className='py-2'></div>
                <h3 >OTHER</h3>
                <div className='py-2'>
                    <SkillItem title={"git"} icon={SiGit} percentage={60} />
                    <SkillItem title={"firebase"} icon={SiFirebase} percentage={70} />
                    <SkillItem title={"mongo DB"} icon={SiMongodb} percentage={30} />
                </div>
            </div>


        </div>
    )
}

type SkillItemProps = {
    title: String
    percentage: number
    icon: React.ElementType
}

const SkillItem = (props: SkillItemProps) => {

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between py-2 '>
                <div className='flex items-center'>
                    <props.icon />
                    <h5 className='flex items-center px-2'>  {props.title}</h5>
                </div>
            </div>
            <div className='w-full h-[10px] border border-black items-center p-[1px]'>
                <div className='h-[6px] bg-black' style={{
                    width: `${props.percentage}%`
                }}>
                </div>
            </div>
        </div>

    )
}

export default Skills