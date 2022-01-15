import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Trends from '../../Components/Trends/Trends'
import './homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className = 's' >
        <Sidebar />
      </div>
      <div className = 'f'>
        <Feed />
      </div>
      <div className = 't'>
        <Trends/>
      </div>
    </div>
  )
}

export default Homepage
