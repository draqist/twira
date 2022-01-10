import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Trends from '../../Components/Trends/Trends'
import './homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Sidebar />
      <Feed />
      <Trends/>
    </div>
  )
}

export default Homepage
