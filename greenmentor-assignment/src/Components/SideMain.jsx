import React from 'react'
import { TopNav } from './TopNav'
import { TopSelect } from './TopSelect'
import { DoughnutChart } from './DoughnutChart'
import { Charts } from './Chart'
import { Table } from './Table'
import "./Styles/SideMain.css"
import Card from './Card'

export const SideMain = () => {
    return (
        <div style={{ width: "100%" }}>
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
