import React from 'react'
import './profile.scss'
import {BsArrowLeftShort} from 'react-icons/bs'
import Trends from '../../Components/Trends/Trends'

const Profilepage = () => {
  return (
    <div className = 'profile'>
      <div className='smfin'>
        <header className='proHead'>
          <BsArrowLeftShort />
          <div>
            <h3> UserName </h3>
            <h6> 123 tweets</h6>
          </div>
        </header>
        <div className='banner'>
          
        </div>
        <main className = 'profileBio'>

        </main>
      </div>
      <div>
        <Trends/>
      </div>
    </div>
  )
}

export default Profilepage
