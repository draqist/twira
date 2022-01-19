import React, {useState, useEffect} from 'react'
import {Twitter, Bookmark, Explore, Home, List, Profile, More, Notification, Message,HomeActive, BookmarkActive, NotificationActive, ListActive, ProfileActive, MessageActive, ExploreActive} from '../../Helpers/Icons'
import Button from '../Button/Button'
import Sroutes from '../sroutes/Sroutes'
import './sidebar.scss'


const Sidebar = () => {
  const [display, setDisplay] = useState('block')
  const screenSize = window.innerWidth < 1025;
  useEffect(() => {
    if (screenSize === true) {
    setDisplay('none')
    } else {
      setDisplay('block')
  }
  }, [screenSize])
  return (
    <section className = 'sidebar'>
      <div className = 'inner'>
      <img src={Twitter} alt='twitter-logo' style = {{'height': '2rem', 'width': '2rem'}} />
        <div className = 'routes'>
          <Sroutes ActiveRout = {HomeActive} RoutImg={ Home } Route = {'Home'} link = {'/'} display = {display}/>
          <Sroutes ActiveRout = {ExploreActive} RoutImg={ Explore } Route = {'Explore'} link = {'/explore'} display = {display}/>
          <Sroutes ActiveRout = {NotificationActive} RoutImg={ Notification } Route = {'Notifications'} link = {'/notifications'} display = {display}/>
          <Sroutes ActiveRout = {MessageActive} RoutImg={ Message } Route = {'Messages'} link = {'/messages'} display = {display}/>
          <Sroutes ActiveRout = {BookmarkActive} RoutImg={ Bookmark } Route = {'Bookmarks'} link = {'/bookmarks'} display = {display}/>
          <Sroutes ActiveRout = {ListActive} RoutImg={ List } Route = {'Lists'} link = {'/lists'} display = {display}/>
          <Sroutes ActiveRout = {ProfileActive} RoutImg={ Profile } Route = {'Profile'} link = {'/profile'} display = {display}/>
          <Sroutes ActiveRout = {More} RoutImg={ More } Route = {'More'} link = {'/more'} display = {display}/>
        </div>
        <Button Text={'Tweet'} display={ display }/>
      </div>
    </section>
  )
}

export default Sidebar
