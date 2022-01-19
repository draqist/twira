import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Trends from '../../Components/Trends/Trends'
import './homepage.scss'
// import { useLocation } from 'react-router-dom'

const Homepage = () => {
  // const location = useLocation()
  return (
    <div className='homepage'>
      <div className = 's' >
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
