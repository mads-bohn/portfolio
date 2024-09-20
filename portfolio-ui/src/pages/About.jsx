import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Skills from '../components/about/Skills'
import Bio from '../components/about/Bio'

export default function About() {
  return (
    <div>
      <SideBar />
      <div className='about'>
        <Bio />
        <Skills />
      </div> 
    </div>
  )
}
