import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Main, Title } from './DashboardComponents'

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <Main>
                <Title>Product Roadmap</Title>
            </Main>
        </>
    )
}

export default Dashboard
