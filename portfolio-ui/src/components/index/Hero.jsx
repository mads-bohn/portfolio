import React from 'react'
import SocialIcons from '../navigation/SocialIcons'
import LinkList from '../navigation/LinkList'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1 className='hero-name'>MADS <br /> BOHN</h1>
        <h3 className='hero-title'>Full-Stack Developer</h3>
      </div>
      <div className='hero-right'>
        <img src='src/assets/profile.jpg' id='profile'></img>
      </div>
    </div>
  )
}
