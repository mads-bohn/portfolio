import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
    </div>
  )
}
