import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Bio from '../components/about/Bio'
import '../components/about/about.css'


export default function About() {
  return (
    <div>
      <SideBar />
      <div className='page'>
        <Bio />
      </div> 
    </div>
  )
}
