import React, { createContext, useState } from 'react'

export const Fakecontext = createContext()
export const ContextAPI = ({ children }) => {
    const [value, Setvalue] = useState("Category-1")
    const [isOpen, SetOpen] = useState(false)
    return (
        <Fakecontext.Provider value={{ value, isOpen, Setvalue, SetOpen }}>
            {children}
        </Fakecontext.Provider>
    )
}
