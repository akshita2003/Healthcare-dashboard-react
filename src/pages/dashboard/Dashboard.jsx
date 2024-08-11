import React from 'react'
import SideBar from '../../components/dashboardComponents/SideBar'
import Home from './Home'
import Box from '@mui/material/Box';
import Footer from '../../components/dashboardComponents/Footer';
import { useDarkMode } from '../../context/DarkModeContext'

const Dashboard = () => {

  const { darkMode } = useDarkMode();

  return (
    <>
      <Box>
        <SideBar/>
        <Home/>
        <Footer />
      </Box>
    </>
  )
}

export default Dashboard