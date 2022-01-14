import React from 'react'
import {Settings} from '../../Helpers/Icons'
import './happening.scss'

const Happening = () => {
  return (
    <div className = 'happening'>
      <h3>What's Happening</h3>
      <img src={ Settings } alt = 'settings'/>
    </div>
  )
}

export default Happening
