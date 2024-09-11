import React from 'react'
import SocialBadges from '../navigation/SocialBadges'
import LinkList from '../navigation/LinkList'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1>MADS BOHN</h1>
        <h3>Full-Stack Developer</h3>
      </div>
      <div className='hero-right'>
        <LinkList />
        <SocialBadges />
      </div>
    </div>
  )
}
