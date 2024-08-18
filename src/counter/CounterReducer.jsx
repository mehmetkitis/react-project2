import React, { useReducer } from 'react'
const counterInitial = {
    adet: 0,
    artisMiktari: 1,
    adetFiyat: 5,
    fiyat: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "arttır":
            const yeniAdet = state.adet + state.artisMiktari;
            return { ...state, adet: yeniAdet, fiyat: yeniAdet * state.adetFiyat }
        case "azalt":
            const yeniAdet1 = state.adet - state.artisMiktari
            return { ...state, adet: yeniAdet1 < 0 ? 0 : yeniAdet1, fiyat: yeniAdet1 * state.adetFiyat }
        case "yuz":
            const yeniAdet3 = 100
            return { ...state, adet: yeniAdet3, fiyat: yeniAdet3 * state.adetFiyat }
        case "artisMiktariArttir":
            return { ...state, artisMiktari: state.artisMiktari + 1 }
        case "artisMiktariAzalt":
            return { ...state, artisMiktari: state.artisMiktari - 1 }
        case "taneFiyatAta":
            return { ...state, adetFiyat: action.payload, fiyat: state.adet * action.payload }
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [counter, dispatchCounter] = useReducer(reducer, counterInitial);

    const arti1 = () => {
        dispatchCounter({ type: "arttır" })
    }
    const eksi1 = () => {
        dispatchCounter({ type: "azalt" })
    }
    const yuz = () => {
        dispatchCounter({ type: "yuz" })
    }
    const artisMiktariArttir = () => {
        dispatchCounter({ type: "artisMiktariArttir" })
    }
    const artisMiktariAzalt = () => {
        dispatchCounter({ type: "artisMiktariAzalt" })
    }
    const taneFiyatAta = (e) => {
        dispatchCounter({ type: "taneFiyatAta", payload: e.target.value < 0 ? 0 : e.target.value })
    }
    return (
        <div className='grid grid-cols-2 '>
            <div>
                <button className='w-[33%] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800' onClick={arti1}>Arttır</button>
                <button className='w-[33%] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800' onClick={eksi1}>Azalt</button>
                <button className='w-[34%] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800' onClick={yuz}>100 adet</button>
            </div>
            <div>
                <button className='w-[50%] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800' onClick={artisMiktariArttir}>{counter.artisMiktari} Artış miktarı arttır</button>
                <button className='w-[50%] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800' onClick={artisMiktariAzalt}>{counter.artisMiktari} Artış miktarı azalt</button>
            </div>
            <div className='grid grid-cols-3 w-screen'>
                <div className='w-[30vw] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800'>Adet {counter.adet}</div>
                <div className='w-[25vw] flex justify-between border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800'>
                    <h4 className='text-center my-1'>Tane Fiyat</h4>
                    <label >
                        <input
                            className='w-full border-2 border-blue-950 border-solid bg-cyan-500 text-right'
                            type="number"
                            value={counter.adetFiyat}
                            onChange={taneFiyatAta} />
                    </label>
                </div>
                <div className='w-[25vw] border-2 border-blue-950 border-solid bg-cyan-500 text-violet-800'>Fiyat {counter.fiyat}</div>
            </div>
        </div>
    )
}

export default CounterReducer
