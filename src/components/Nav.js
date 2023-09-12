import React from 'react';
import "./Nav.css";
import { Nav } from 'reactstrap';

export default function Navi(props) {
    const setSection = props.setSection;
    return (
        <Nav className="navComp">
         <ul>
            <li>
                <a onClick={()=>{setSection("About Me")}} className={props.section==="About Me"?"nav-link active":"nav-link"} href="#">About Me</a>
            </li>
            <li>
                <a onClick={()=>{setSection("Portfolio")}} className={props.section==="Portfolio"?"nav-link active":"nav-link"} href="#">Portfolio</a>
            </li>
            <li>
                <a onClick={()=>{setSection("Contact")}} className={props.section==="Contact"?"nav-link active":"nav-link"} href="#">Contact</a>
            </li>
            <li>
                <a onClick={()=>{setSection("Resume")}} className={props.section==="Resume"?"nav-link active":"nav-link"} href="#">Resume</a>
            </li>
         </ul>
        </Nav>
    )
}