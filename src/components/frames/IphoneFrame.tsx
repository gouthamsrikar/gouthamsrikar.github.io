import React, { ReactNode } from 'react'

interface IphoneFrameProps {
    children?: ReactNode
}

const IphoneFrame = (props: IphoneFrameProps) => {
    return (
        <div className='h-full flex'>
            <div className='border-red-500 border-[1px] rounded-[65px] h-full shadow-[0px_0px_100px_#F699528E] aspect-[0.461]'>
                <div className='overflow-clip h-full w-full flex flex-col items-center justify-start bg-white border-[10px] border-black rounded-[64px]'>
                    <IphoneNotch />
                    <div className='flex-grow h-full w-full flex flex-col '>
                        <div className='flex h-full w-full flex-col'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='w-[4px] bg-gradient-to-r from-red-500 to-red-400 h-[10%] rounded-r-full mt-[100px] hover:w-0 transition-all '>

                </div>
            </div>
        </div>


    )
}

export default IphoneFrame

const IphoneNotch = () => {
    return <div className='w-full flex items-center justify-center'>
        <div className='bg-black h-[24px] w-[40%] rounded-full m-3 hover:scale-[1.05] transition-all p-[4px]'>
            <div className='h-full aspect-square rounded-full bg-white/20 p-[4px]'>
                <div className='h-full aspect-square rounded-full bg-blue-600/40 p-[2px]'>
                    <div className='h-full aspect-square rounded-full bg-red-600/20 '>

                    </div>
                </div>
            </div>
        </div>
    </div>

}
