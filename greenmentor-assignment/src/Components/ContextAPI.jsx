import React, { createContext, useState } from 'react'

export const Fakecontext=createContext()
export const ContextAPI = ({children}) => {
    const [value,Setvalue]=useState("Category-1")
  return (
    <Fakecontext.Provider value={{value,Setvalue}}>
        {children}
    </Fakecontext.Provider>
  )
}
