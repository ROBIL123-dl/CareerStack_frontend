import React, { useEffect } from 'react'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/layout/hero'
import StatsSection from '../../components/layout/stats'
import { userHome } from '../../services/studentServices/common'



const StudentHome = ({ user }) => {
    useEffect(() => {
        const fetchUserHomeData = async () => {
            try {
                const res = await userHome();
                console.log("success response:", res)
            } catch (err) {
                console.log("error", err)
            }
        }
        fetchUserHomeData();
    }, [])
    console.log("user in home", user)
    return (
        <div>
            <Navbar role={user.role} />
            <HeroSection />
            <StatsSection />
        </div>
    )
}

export default StudentHome
