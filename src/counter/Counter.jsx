import React from 'react'
import { useCounter } from '../hooks/useCounter'

const counterObj = {
    baslangic: 0,
    artisMiktari: 1,
}

const Counter = () => {
    const [counter, arttir, azalt, reset] = useCounter(counterObj.baslangic || 0, counterObj.artisMiktari || 1);
    return (
        <div className='flex flex-col text-center '>
            <div className='my-3 ml-[47vw] border-2 border-solid border-red-700 bg-gray-950 text-white w-[6vw] '>{counter}</div>
            <div className='flex justify-center gap-2'>
                <button className='p-1 hover:bg-gray-950 hover:text-white rounded border-2 border-solid border-purple-950 mx-1.5 	' onClick={arttir}>Arttır</button>
                <button className='p-1 hover:bg-gray-950 hover:text-white rounded border-2 border-solid border-purple-950 mx-1.5 	' onClick={reset}>Reset</button>
                <button className='p-1 hover:bg-gray-950 hover:text-white rounded border-2 border-solid border-purple-950 mx-1.5 	' onClick={azalt}>Azalt</button>
            </div>
        </div>
    )
}

export default Counter
