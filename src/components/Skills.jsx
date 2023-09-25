import React from 'react'
import SectionTitle from './SectionTitlee'
import {skills} from "../data"
import SkillsCard from './SkillsCard'


const Skills = () => {
  return (
    <section className='px-20 py-20 align-element' id="skills">
        <SectionTitle/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill)=>{
                return <SkillsCard key={skill.id} {...skill}/>
            }
           )}
        </div>
    </section>
  )
}

export default Skills