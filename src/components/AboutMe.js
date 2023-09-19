import React from 'react';
import "./AboutMe.css";
import me from "../assets/images/me.png";

export default function AboutMe() {
    return (
    <div className='aboutMe-card'>
        <div className='about-box'>
            <div className='about-name'>
                <h2>About Me</h2>
                <img className="selfie" src={me} alt="Picture of Bo Salinas"/>
            </div>
            <div className='about-text'>
                <p>Hi, my name is Bo Salinas. I use they/them pronouns. I was born in California and raised in Texas. I worked in Special
                    Education for a few years before starting this new challenge of becoming a web developer. I'm in the beginning of
                    my journey to become an excellent web developer.
                    In a nutshell, I want to create websites that help organizations address business challenges and meet
                    their needs.
                </p>
            </div>
        </div>
    </div>
    )
}