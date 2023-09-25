import React from 'react'
import SectionTitle from './SectionTitlee'
import {projects} from "../data"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='p-20 align-elements' id="projects">
        <SectionTitle text="Projects"/>
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project)=>{
            return <ProjectCard key={project.id} {...project}/>
          })}
        </div>
    </section>
  )
}

export default Projects