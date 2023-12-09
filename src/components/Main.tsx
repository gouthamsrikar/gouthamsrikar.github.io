import React from 'react'

const Main = () => {
    return (
        <div className='w-full h-screen items-center grid-cols-1 '>
            <div className='max-w-[1240px] w-full h-[50%] mx-auto p-2 flex justify-center items-center'>
                <div >
                    <p className='uppercase  tracking-widest text-xl'>BUILDING SOMETHING PEOPLE WANT</p>
                    <h1 className='text-5xl'>
                        Hi, I&apos;m <span className='text-gray-500 transition-all duration-1000'>Goutham</span>
                    </h1>

                    <p className='uppercase text-sm tracking-widest py-4'>developer \ photographer \ artist</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={require('../assets/sissu.jpg')} alt="sissu" className='h-80 justify-center' />
            </div>

            {/* <img src="https://cdna.artstation.com/p/assets/images/images/048/770/166/medium/goutham-srikar-asset.jpg?1650905213" alt="" className='w-full' /> */}
            <div className=' mx-auto my-3 flex justify-center items-center  '>
                <div className='px-5 py-1 bg-black bg-opacity-75 bottom-3'>
                    <p className='uppercase text-sm text-white tracking-widest'>Chasing angels or fleeing demons, go to the mountains</p>
                </div>


            </div>



        </div>
    )
}

export default Main