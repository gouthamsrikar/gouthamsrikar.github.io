import React, { useState } from 'react'

const AnimTest = () => {

    const [trans, setTrans] = useState<boolean>(false);

    return (
        <div className='flex w-full h-52 justify-around items-center'>
            <button className='bg-blue-500 h-16 w-72' onClick={() => {
                setTrans(!trans)
            }}>
                change
            </button>

            <div className={`h-16 bg-violet-300 transition-all duration-300 ${trans ? 'w-96' : 'w-11'}`}>

            </div>

        </div>
    )
}

export default AnimTest