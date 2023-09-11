import Project from "./components/Project";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React, { useState } from 'react';

export default function App() {
    const [section, setSection] = useState('About Me');

    return (
        <div className='portfolio-app'>
            <Nav section={section} setSection={setSection}/>
            {section==="Portfolio"?<Project />:""}
            {section==="Contact"?<Contact />:""}
            <Footer />
        </div>
    )
}

