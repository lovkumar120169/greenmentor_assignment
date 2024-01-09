import React from 'react'
import { TopNav } from './TopNav'
import { TopSelect } from './TopSelect'
import { Card } from './Card'

export const SideMain = () => {
  return (
    <div style={{width:"100%"}}>
        <TopNav/>
        <TopSelect/>
        <Card/>
    </div>
  )
}
