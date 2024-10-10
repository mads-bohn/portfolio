import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Bio from '../components/about/Bio'
import Hero from '../components/index/Hero'
import ProjectList from '../components/projects/ProjectList'

export default function Index() {
  return (
    <div>
      <SideBar />
      <div className='page'>
        <Hero />
        <div id='about'>
          <Bio />
        </div>
        <div id='projectList'>
          <ProjectList />
        </div>
        <div id='experience'></div>
      </div> 
    </div>
  )
}