import React, {useState} from 'react'
import './bottom.scss'
import {Home, Search, Notification, Message, HomeActive, NotificationActive, MessageActive} from '../../Helpers/Icons'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  const [nav, setNav] = useState(false)
  const [nav1, setNav1] = useState(false)
  const [nav2, setNav2] = useState(false)
  const [nav3, setNav3] = useState(false)
  return (
    <section className = 'bottomBar'>
      <NavLink to = '/' style = {({isActive}) => {isActive ? setNav(true): setNav(false)}}>
        <img src={nav? HomeActive : Home } alt = 'home' className = 'bnI'/>
      </NavLink>
      <NavLink to = '/search' style = {({isActive}) => {isActive ? setNav1(true): setNav1(false)}}>
        <img src={ nav1? Search: Search } alt = 'search' className = 'bnI'/>
      </NavLink>
      <NavLink to = '/notifications' style = {({isActive}) => {isActive ? setNav2(true): setNav2(false)}}>
        <img src={ nav2?NotificationActive: Notification } alt = 'notification' className = 'bnI'/>
      </NavLink>
      <NavLink to = '/messages' style = {({isActive}) => {isActive ? setNav3(true): setNav3(false)}}>
        <img src={ nav3? MessageActive: Message } alt = 'messages' className = 'bnI'/>
      </NavLink>
    </section>
  )
}

export default BottomNav
