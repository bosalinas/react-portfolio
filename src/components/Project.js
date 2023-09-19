import React from 'react';
import "./Project.css";


export default function Project(props) {
    return (
            <div className='project-card' > 
                <a href={props.link}><img src={props.img} /></a>
                <h3>
                    {props.projectName}
                </h3>
                <div className='info-group'>
                    <p>{props.text}</p>
                    <a href={props.git}><button><span>Repo</span></button></a>
                </div>
            </div>
    )
}

