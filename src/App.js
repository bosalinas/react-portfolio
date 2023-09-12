import Project from "./components/Project";
import Navi from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";
import React, { useState } from 'react';

export default function App() {
    const [section, setSection] = useState('About Me');

    return (
        <div className='portfolio-app'>
            <Navi section={section} setSection={setSection}/>
            {section==="Portfolio"?<Project />:""}
            {section==="Contact"?<Contact />:""}
            <Footer />
        </div>
    )
}

