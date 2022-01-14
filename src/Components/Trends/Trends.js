import React from 'react'
import Follow from '../Follow/Follow'
import Happening from '../Happenings/Happening'
import Search from '../Search/Search'
import './trends.scss'

const Trends = () => {
  return (
    <div className='trends'>
      <Search/>
      <Happening />
      <Follow/>
    </div>
  )
}

export default Trends
