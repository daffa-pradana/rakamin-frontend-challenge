import React from 'react'
import Group from '../../components/Group'
import Sidebar from '../../components/Sidebar'
import { Content, Main, Title } from './DashboardComponents'

import group_enum from '../../components/Group/GroupEnums'

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <Main>
                <Title>Product Roadmap</Title>
                <Content>
                    {group_enum.map((group) => {
                        return <Group id={group.id} group={group}/>
                    })}
                </Content>
            </Main>
        </>
    )
}

export default Dashboard
