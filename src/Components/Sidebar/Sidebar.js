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
          <Sroutes RoutImg={ Home } Route = {'Home'} link = {'/'} />
          <Sroutes RoutImg={ Explore } Route = {'Explore'} link = {'/explore'} />
          <Sroutes RoutImg={ Notification } Route = {'Notifications'} link = {'/notifications'} />
          <Sroutes RoutImg={ Message } Route = {'Messages'} link = {'/messages'} />
          <Sroutes RoutImg={ Bookmark } Route = {'Bookmarks'} link = {'/bookmarks'} />
          <Sroutes RoutImg={ List } Route = {'Lists'} link = {'/lists'} />
          <Sroutes RoutImg={ Profile } Route = {'Profile'} link = {'/profile'} />
          <Sroutes RoutImg={ More } Route = {'More'} link = {'/more'} />
        </div>
        <Button Text={ 'Tweet' }/>
      </div>
    </section>
  )
}

export default Sidebar
