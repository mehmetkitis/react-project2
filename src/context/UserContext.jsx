import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [theme, setTheme] = useState();
    const [lang, setLang] = useState("tr");
    return (
        <UserContext.Provider value={{
            userName,
            setUserName,
            email,
            setEmail,
            theme,
            setTheme,
            lang,
            setLang
        }} >
            {children}
        </UserContext.Provider>
    )
}


