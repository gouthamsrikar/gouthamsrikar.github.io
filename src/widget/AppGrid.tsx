import React from 'react'

interface AppGridProps {
    expanded: boolean
    bg: Array<string>
}

const AppGrid = (props: AppGridProps) => {
    return (
        <div className={`${props.expanded ? 'scale-100 opacity-100' : 'scale-[3] opacity-0'} rounded-xl w-full h-max grid grid-cols-4 gap-2 p-6 transition-all duration-1000`}>
            {
                props.bg.map((e, index) => <AppIcon bg={e} />)
            }
        </div>
    )
}

interface AppIconProps {
    bg: string
}


const AppIcon = (props: AppIconProps) => {
    return (
        <div className={`h-12 aspect-square rounded-lg bg-[#00000020] bg-cover ${props.bg}`}>

        </div>
    )
}


export default AppGrid