import React from 'react'

const Main = () => {
    return (
        <div className='w-full h-screen items-center grid-cols-1'>


            <div className='max-w-[1240px] w-full h-[50%] mx-auto p-2 flex justify-center items-center'>
                <div >
                    <p className='uppercase text-sm tracking-widest'>MAKING SOMETHING PEOPLE WANT</p>
                    <h1>
                        Hi, I'm <span className='text-gray-500'>Goutham</span>
                    </h1>

                    <p className='uppercase text-sm tracking-widest py-4'>developer \ photographer \ artist</p>
                </div>
            </div>
            <img src="https://cdna.artstation.com/p/assets/images/images/048/770/166/medium/goutham-srikar-asset.jpg?1650905213" alt="" className='w-full' />
            <div className=' mx-auto p-2 flex justify-center items-center'>
                <p className='uppercase text-sm tracking-widest'>Chasing angels or fleeing demons, go to the mountains</p>

            </div>



        </div>
    )
}

export default Main