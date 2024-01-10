import React from 'react'
import { TopNav } from './TopNav'
import { TopSelect } from './TopSelect'
import { Card } from './Card'
import { DoughnutChart } from './DoughnutChart'
import { Charts } from './Chart'
import { Table } from './Table'
import "./SideMain.css"

export const SideMain = () => {
    return (
        <div  style={{width:"100%"}}>
            <TopNav />
            <TopSelect />
            <Card />
            <Charts />
            <div className="chart-table-container">
                <DoughnutChart />
                <Table />
            </div>
        </div>
    )
}
