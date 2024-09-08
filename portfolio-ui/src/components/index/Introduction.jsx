import React from 'react'
import SocialBadges from './SocialBadges'

export default function Introduction() {
  return (
    <div className='introduction'>
        <p>Hi, my name is</p>
        <h1>Mads Bohn</h1>
        <h3>I'm a full-stack developer specializing in user-driven design.</h3>
        <SocialBadges iconSize={"l"} />
    </div>
  )
}
