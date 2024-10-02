import React from 'react'
import { Link } from "react-router-dom"
import './navigation.css'

export default function LinkList() {
  return (
    <div>
      <ul className='linkList'>
        <li><a href='#about'>About</a></li>
        <li><a href='#projectList'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
      </ul>
    </div>
  )
}
