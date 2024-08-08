import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const localVal = localStorage.getItem(key);

        return localVal ? JSON.parse(key) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}