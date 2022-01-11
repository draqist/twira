import React from 'react'
import Happening from '../Happenings/Happening'
import Search from '../Search/Search'
import './trends.scss'

const Trends = () => {
  return (
    <div className='trends'>
      <Search/>
      <Happening/>
    </div>
  )
}

export default Trends
