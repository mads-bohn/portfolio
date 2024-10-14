import React from 'react'
import Tags from './Tags'
import '../projects/projects.css'

let projectsArray = [
    {
        title: "Tent Talk",
        description: "Tent Talk is an application created to streamline the process of finding a place to camp. It allows users to search and review campgrounds.",
        techStack: ["React", "Spring Boot", "MySQL", "Google Places API"],
        link: "https://github.com/mads-bohn/tent-talk",
        thumbnail: "src/assets/tenttalk.png"
    },
    {
        title: "Github Contributions",
        description: "Check my Github to see my latest contributions.",
        techStack: [],
        link: "https://github.com/mads-bohn",
        thumbnail: "src/assets/github.jpg"
    }
]

export default function ProjectList() {
  return (
    <div>
        <div className='project-list'>
           {projectsArray.map(project => (
            <div className='project' key={project.title}>
                <img src={project.thumbnail} alt={project.title} className='project-thumbnail'/>
                <div className='project-text'>
                    <h3 className='project-title'><a href={project.link}>{project.title}</a></h3>
                    <p className='project-description'>{project.description}</p> 
                
                <Tags tagsArray={project.techStack}/>
                </div>
            </div>
        ))} 
        </div>
    </div>
  )
}
