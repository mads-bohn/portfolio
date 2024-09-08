import React from 'react'
import SocialBadges from './SocialBadges'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h4>Hi, my name is</h4>
        <h1>Mads Bohn</h1>
        <h3>I'm a full-stack developer specializing in user-driven design.</h3>
        <SocialBadges iconSize={"l"} />
      </div>
      <div className='hero-right'>
        <img src='../src/assets/placeholder.png'/>
      </div>
    </div>
  )
}
