import React from 'react';
import "./Project.css"
import { Button } from 'reactstrap';


export default function Project(props) {
    return (
            <div className='project-card'>
                <img src={props.img} />
                <h3>
                    {props.projectName}
                </h3>
                <div className='info-group'>
                    <p>Text for the project</p>
                </div>
                <a href={props.link}><Button className='btn'>View</Button></a>
            </div>
    )
}
