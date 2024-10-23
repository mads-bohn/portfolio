import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Bio from '../components/about/Bio'
import Hero from '../components/index/Hero'
import ProjectList from '../components/projects/ProjectList'
import Experience from '../components/experience/Experience'

export default function Index() {
  return (
    <div>
      <div className='page'>
        <Hero />
        <div id='about' className='section'>
          <Bio />
        </div>
        <div id='projectList' className='section'>
          <ProjectList />
        </div>
        <div id='experience' className='section'>
          <Experience />
        </div>
      </div> 
    </div>
  )
}