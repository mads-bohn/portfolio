import React from 'react'
import Navbar from '../components/navigation/LinkList'
import SideBar from '../components/navigation/SideBar'
import ProjectList from '../components/projects/ProjectList'

export default function Projects() {
  return (
    <div>
      <SideBar />
      <div className='page'>
        <ProjectList />
      </div>
    </div>
  )
}
