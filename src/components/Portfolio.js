import React, { useState } from 'react';
import Project from "./Project";

export default function Portfolio() {
   const projects = [
        {
            projectName:"Yass Flix",
            link:"https://bosalinas.github.io/ShowBox/",
            img:""
        },
        {
            projectName:"Project 2",
            link:"https://bosalinas.github.io/ShowBox/",
            img:""
        }
   ];
   return (
    <div> 
        {projects.map((project, index) => (
            <Project project={project}
            key={"project" + index} />
        ))}
    </div>
   )
}