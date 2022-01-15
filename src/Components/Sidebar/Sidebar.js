import React, {useState, useEffect} from 'react'
import {Twitter, Bookmark, Explore, Home, List, Profile, More, Notification, Message} from '../../Helpers/Icons'
import Button from '../Button/Button'
import Sroutes from '../sroutes/Sroutes'
import './sidebar.scss'


const Sidebar = () => {
  const [display, setDisplay] = useState('block')
  const screenSize = window.innerHeight;
  useEffect(() => {
    if (screenSize >= 1025) {
    setDisplay('none')
  }
  },[])
  return (
    <section className = 'sidebar'>
      <div className = 'inner'>
      <img src={Twitter} alt='twitter-logo' style = {{'height': '2rem', 'width': '24px'}} />
        <div className = 'routes'>
          <Sroutes RoutImg={ Home } Route = {'Home'} link = {'/'} display = {display}/>
          <Sroutes RoutImg={ Explore } Route = {'Explore'} link = {'/explore'} display = {display}/>
          <Sroutes RoutImg={ Notification } Route = {'Notifications'} link = {'/notifications'} display = {display}/>
          <Sroutes RoutImg={ Message } Route = {'Messages'} link = {'/messages'} display = {display}/>
          <Sroutes RoutImg={ Bookmark } Route = {'Bookmarks'} link = {'/bookmarks'} display = {display}/>
          <Sroutes RoutImg={ List } Route = {'Lists'} link = {'/lists'} display = {display}/>
          <Sroutes RoutImg={ Profile } Route = {'Profile'} link = {'/profile'} display = {display}/>
          <Sroutes RoutImg={ More } Route = {'More'} link = {'/more'} display = {display}/>
        </div>
        <Button Text={'Tweet'} display={ display }/>
      </div>
    </section>
  )
}

export default Sidebar
