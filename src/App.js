import AboutMe from "./components/AboutMe";
import Navi from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume"
import Project from "./components/Project";
import "./App.css";
import React, { useState } from 'react';

export default function App() {
    const [section, setSection] = useState('About Me');

    return (
        <div className='portfolio-app'>
            <Navi section={section} setSection={setSection}/>
            {section==="About Me"?<AboutMe />:""}
            {section==="Project"?<Project />:""}
            {section==="Resume"?<Resume />:""}
            {section==="Contact"?<Contact />:""}
            <Footer />
        </div>
    )
}

