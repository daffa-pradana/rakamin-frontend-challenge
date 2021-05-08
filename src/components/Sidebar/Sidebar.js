import React from 'react'
import { Logo, SidebarWrapper } from './SidebarComponents'

const Sidebar = () => {
    const logo = process.env.PUBLIC_URL + "icon/logo.svg"
    return (
        <>
            <SidebarWrapper>
                <Logo src={logo} draggable={false}/>
            </SidebarWrapper>
        </>
    )
}

export default Sidebar
