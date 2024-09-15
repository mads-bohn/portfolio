import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Skills from '../components/about/Skills'
import Intro from '../components/about/Intro'

export default function About() {
  return (
    <div>
      <SideBar />
      <div className='about'>
        <Intro />
        <Skills />
      </div> 
    </div>
  )
}
