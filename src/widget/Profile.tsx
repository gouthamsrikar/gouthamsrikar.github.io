import React from 'react'

const Profile = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='rounded-full aspect-square h-16 bg-black bg-goutham bg-cover' />
            <div className='flex flex-col gap-1 items-center'>
                <h1 className='opacity-40 text-lg'>
                    Hi, I&apos;m <span>Goutham</span>
                </h1>
                <p className='uppercase text-[12px] tracking-widest '>developer \ photographer \ artist</p>
            </div>

        </div>
    )
}

export default Profile