import React from 'react'
import Navbar from '../components/navbar'
import SocialBadges from '../components/index/SocialBadges'

export default function Index() {
  return (
    <div>
        <Navbar />
        <p>Hello, world!</p>
        <SocialBadges iconSize={"l"} />
    </div>
  )
}