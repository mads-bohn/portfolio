import React from 'react'
import { Link } from 'react-router-dom'
import LinkList from './LinkList'
import SocialIcons from './SocialIcons'
import './navigation.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-name'>
        <h1><Link to="/">MADS <br /> BOHN</Link></h1>
      </div>
      <div className='sidebar-links'>
        <LinkList />
      </div>
      <div className='sidebar-icons'>
        <SocialIcons />
      </div>
    </div>
  )
}
