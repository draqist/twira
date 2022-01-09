import React from 'react'
import {Twitter, Bookmark, Explore, Home, List, Profile, More, Notification, Message} from '../../Helpers/Icons'
import Button from '../Button/Button'
import Sroutes from '../sroutes/Sroutes'
import './sidebar.scss'


const Sidebar = () => {
  return (
    <section className = 'sidebar'>
      <div className = 'inner'>
      <img src={Twitter} alt='twitter-logo' style = {{'height': '2rem', 'width': '24px'}} />
        <div className = 'routes'>
          <Sroutes RoutImg={ Home } Route = {'Home'} />
          <Sroutes RoutImg={ Explore } Route = {'Explore'} />
          <Sroutes RoutImg={ Notification } Route = {'Notifications'} />
          <Sroutes RoutImg={ Message } Route = {'Messages'} />
          <Sroutes RoutImg={ Bookmark } Route = {'Bookmarks'} />
          <Sroutes RoutImg={ List } Route = {'Lists'} />
          <Sroutes RoutImg={ Profile } Route = {'Profile'} />
          <Sroutes RoutImg={ More } Route = {'More'} />
        </div>
        <Button Text={ 'Tweet' }/>
      </div>
    </section>
  )
}

export default Sidebar
