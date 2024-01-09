import React from 'react'
import { TopNav } from './TopNav'
import { TopSelect } from './TopSelect'
import { Card } from './Card'
import { DoughnutChart } from './DoughnutChart'
import { Charts } from './Chart'
import { Table } from './Table'

export const SideMain = () => {
    return (
        <div style={{ width: "100%" }}>
            <TopNav />
            <TopSelect />
            <Card />
            <Charts />
            <div style={{display:"flex",marginLeft:"1.5rem",gap:"2.06rem",marginBottom:"1rem"}}>
                <DoughnutChart />
                <Table />
            </div>
        </div>
    )
}
