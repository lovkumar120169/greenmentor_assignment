import React from 'react'
import { SideNav } from './SideNav'
import { TopNav } from './TopNav'
import "./Main.css"

export const Main = () => {
  return (
    <div className='container'>
        <SideNav/>
        <TopNav/>
    </div>
  )
}
