import React from 'react'
import { IconType } from 'react-icons/lib'
import { SiFlutter, SiDart, SiReact, SiTailwindcss, SiCplusplus, SiGo, SiGit, SiFirebase, SiMongodb, SiTypescript } from 'react-icons/si'


const Skills = () => {
    return (
        <div id='skills' className="items-center px-8 justify-between md:h-screen w-1/2">  
            <div className='h-20'></div>
            <h1 className='pr-6 text-7xl'>SKILLS</h1 >
            <div className='w-[100%] '>
                <div className='md:flex justify-between'>
                    <SkillsCategory
                        categoryName='PROGRAMMING LANGUAGES'
                        skills={[
                            { title: "dart", icon: SiDart, percentage: 80 },
                            { title: "go", icon: SiGo, percentage: 60 },
                            { title: "c++", icon: SiCplusplus, percentage: 60 },
                            { title: "typescript", icon: SiTypescript, percentage: 60 },
                        ]} />
                    <SkillsCategory
                        categoryName='FRONTEND'
                        skills={[
                            { title: "flutter", icon: SiFlutter, percentage: 80 },
                            { title: "react", icon: SiReact, percentage: 60 },
                            { title: "tailwind css", icon: SiTailwindcss, percentage: 60 },
                        ]} />
                </div>

                <div className='md:flex justify-between'>

                    <SkillsCategory
                        categoryName='BACKEND'
                        skills={[
                            { title: "gofiber", icon: SiGo, percentage: 80 },
                            { title: "gin", icon: SiGo, percentage: 60 },
                            { title: "firebase", icon: SiFirebase, percentage: 60 },
                            { title: "mongo DB", icon: SiMongodb, percentage: 60 },
                        ]} />
                    <SkillsCategory
                        categoryName='OTHER SKILLS'
                        skills={[
                            { title: "git", icon: SiGit, percentage: 80 },
                        ]} />

                </div>
            </div>


        </div>
    )
}


type SkillsCategoryProps = {
    categoryName: string
    skills: SkillItemProps[]
}


const SkillsCategory = (props: SkillsCategoryProps) => {
    return (
        <div className='w-full md:w-[45%]'>
            <div className='py-2'></div>
            <h3 className='font-bold'>{props.categoryName}</h3>
            <div className='py-2'>
                {
                    props.skills.map((e) => <SkillItem key="skillitem" title={e.title} icon={e.icon} percentage={e.percentage} />)
                }
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
                <div className='h-[6px] bg-black transition duration-300' 
                style={{  width: `${props.percentage}%`}}
                >
                </div>
            </div>
        </div>

    )
}

export default Skills