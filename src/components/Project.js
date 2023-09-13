import React from 'react';
import "./Project.css"
import { Button } from 'reactstrap';

export default function Project(project) {
    let { projectName, link } = project;

    return (
            <div className='project-card'>
                <img src='' />
                <h3>
                    {projectName}
                </h3>
                <div className='info-group'>
                    <p>Text for the project</p>
                </div>
                <a href={link}><Button className='btn'>View</Button></a>
            </div>
    )
}
