import { useState } from "react"


export const useCounter = (baslangic = 0, artisMiktari = 1) => {
    const [counter, setCounter] = useState(baslangic);

    const arttir = () => {
        setCounter(counter + artisMiktari);
    }

    const azalt = () => {
        setCounter(counter - artisMiktari);
    }

    const reset = () => {
        setCounter(baslangic);
    }

    return [counter, arttir, azalt, reset]
}


