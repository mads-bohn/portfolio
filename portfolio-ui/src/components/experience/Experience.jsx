import React from 'react'
import ResumeButton from './ResumeButton'

let experienceArray = [
    {
        title: "LaunchCode",
        years: "2024",
        description: "Here's a paragraph about what I learned in LaunchCode."
    },
    {
        title: "Service Industry",
        years: "2016-2022",
        description: "Here's a paragraph about why my experience in the service industry makes me a great programmer."
    }
]

export default function Experience() {
  return (
    <div>
        <div className='experience-list'>
            {experienceArray.map(experience => (
                <div className='project' key={experience.title}>
                    <p className='experience-years'>{experience.years}</p>
                    <div className='project-text'>
                        <h3 className='project-title'>{experience.title}</h3>
                        <p className='project-description'>{experience.description}</p>
                    </div>
                </div>
            )
            )}
        </div>
        <ResumeButton />
    </div>
  )
}
