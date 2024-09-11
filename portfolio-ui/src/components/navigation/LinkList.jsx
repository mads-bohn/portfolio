import React from 'react'
import { Link } from "react-router-dom"

export default function LinkList() {
  return (
    <div>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
    </div>
  )
}
