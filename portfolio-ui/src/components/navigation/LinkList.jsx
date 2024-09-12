import React from 'react'
import { Link } from "react-router-dom"
import './navigation.css'

export default function LinkList() {
  return (
    <div>
      <ul className='linkList'>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
