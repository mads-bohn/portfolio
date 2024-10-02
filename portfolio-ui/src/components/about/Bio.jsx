import React from 'react'

export default function Bio() {
  return (
    <>
    <div className='bio'>
        <h1>About</h1>
        <div className='content'>
          <h3 className='bio-highlight'>I'm a motivated and curious full-stack developer with a history
            in customer service. 
          </h3>
          <p className='bio-history'>My passion for coding began when I wanted to create my own website, and
            became frustrated with the constraints of no-code builders. Programming ignited my desire to learn 
            and solve problems. In 2024, I graduated from LaunchCode's web development course. Now, I'm 
            looking for more opportunities to expand my skill set in software development. 
          </p>
        </div>
    </div>
    <div className='skills'>
      <div className='content'> 
        <h2>Skills</h2>   
        <ul className='skills-list'>
          <li>JavaScript</li>
          <li>Java</li>
          <li>SQL</li>
          <li>React</li>
          <li>Spring Boot</li>
          <li>HTML + CSS</li>
        </ul>
      </div>
    </div>
    </>
  )
}
