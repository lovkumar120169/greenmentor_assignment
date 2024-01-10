import React from 'react'
import { SideNav } from './SideNav'
import "./Styles/Main.css"
import { SideMain } from './SideMain'

export const Main = () => {
  return (
    <div className='container'>
      <SideNav />
      <SideMain />
    </div>
  )
}
