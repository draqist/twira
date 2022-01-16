import React from 'react'
import './feed.scss'
import {star,profilePic} from '../../Helpers/Icons'

const Feed = ({ }) => {
  return (
    <div className='feed'>
      <header className='feedHeader'>
        <h3>Home</h3>
        <img src={star} alt = 'star'/>
      </header>
      <main className='mainFeed'>
        <img src={ profilePic } alt='feedImage' className = 'pp' />
        <section>
          <div className='tweeter'>
            <h5></h5>
            <span></span>
          </div>
          <div className = 'tweet'></div>
          <div className = 'interactions'></div>
        </section>
      </main>
    </div>
  )
}

export default Feed
