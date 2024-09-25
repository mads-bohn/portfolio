import React from 'react'

let projectsArray = [
    {
        title: "Tent Talk",
        description: "Tent Talk is an application created to streamline the process of finding a place to camp. It allows users to search and review campgrounds.",
        techStack: ["React", "Spring Boot", "MySQL", "Google Places API"],
        link: "https://github.com/mads-bohn/tent-talk",
        thumbnail: "src/components/projects/tenttalk.png"
    },
    {
        title: "Github Contributions",
        description: "Check my Github to see my latest contributions.",
        techStack: [],
        link: "https://github.com/mads-bohn",
        thumbnail: "src/components/projects/github.jpg"
    }
]

export default function ProjectList() {
  return (
    <div>
        <h1>Projects</h1>
        {projectsArray.map(project => (
            <div key={project.title}>
                <img src={project.thumbnail} alt={project.title} />
                <h3><a href={project.link}>{project.title}</a></h3>
                <p>{project.description}</p>
            </div>
        ))}
    </div>
  )
}
