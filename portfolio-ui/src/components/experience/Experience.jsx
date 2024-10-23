import React from 'react'
import ResumeButton from './ResumeButton'
import Tags from '../projects/Tags'

let experienceArray = [
    {
        title: "LaunchCode",
        years: "2024",
        description: "Over the eight months I was in LaunchCode's web development course, I went from zero coding experience to developing a full-stack web application. I collaborated with peers using Agile methodology, and practiced talking about my work in mock interviews.",
        skills: ["React", "Java", "SQL", "JavaScript", "Agile"]
    },
    {
        title: "Food Service Industry",
        years: "2016 - 2022",
        description: "As a restaurant worker, I was responsible for communicating with customers and cooks to provide efficient and friendly service. When I noticed a large amount of orders being sent back to the kitchen at Woofies Hot Dogs, I redesigned the menu to showcase the items more accurately. This increased customer satisfaction and reduced wait times.",
        skills: ["Design", "Communication"]
    }
]

export default function Experience() {
  return (
    <div>
        <h2>Experience</h2>
        <div className='experience-list'>
            {experienceArray.map(experience => (
                <div className='project' key={experience.title}>
                    <p className='experience-years'>{experience.years}</p>
                    <div className='project-text'>
                        <h3 className='project-title'>{experience.title}</h3>
                        <p className='project-description'>{experience.description}</p>
                        <Tags tagsArray={experience.skills} />
                    </div>
                </div>
            )
            )}
        </div>
        <ResumeButton />
    </div>
  )
}
