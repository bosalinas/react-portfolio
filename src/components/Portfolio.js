import React from 'react';
import Project from "./Project";
import gsd from "../assets/images/GSD.png";
import flix from "../assets/images/yasflix.png";
import quiz from "../assets/images/quiz.png";
import pg from "../assets/images/pg.png";
import horiseon from "../assets/images/horiseon.png";
import workday from "../assets/images/workday.png";


export default function Portfolio() {
    return (
        <div className="projects">
            <Project 
                img={flix}
                projectName="Yass Flix" 
                link="https://bosalinas.github.io/ShowBox/"
                text="This was the first team project I worked on. We decided to build a movie database."
                git="https://github.com/bosalinas/ShowBox"
            />
            <Project 
                img={gsd}
                projectName="Get Sh*t Done" 
                link="https://gsdone-2f10065746b9.herokuapp.com/"
                text="The beginnings on a to-do list app."
                git="https://github.com/bosalinas/GSDone"
            />
            <Project 
                img={quiz}
                projectName="Quiz" 
                link="https://bosalinas.github.io/MC-Quiz/"
                text="Building a multiple choice quiz in Javascript."
                git="https://github.com/bosalinas/MC-Quiz"
            />
            <Project 
                img={pg}
                projectName="Password Generator" 
                link="https://bosalinas.github.io/random-password-generator/"
                text="A project to build a simple password generator using JS."
                git="https://github.com/bosalinas/random-password-generator"
            />
            <Project 
                img={workday}
                projectName="Workday Scheduler" 
                link="https://bosalinas.github.io/workday-scheduler/"
                text="A simple schedule feature."
                git="https://github.com/bosalinas/workday-scheduler"
            />
            <Project 
                img={horiseon}
                projectName="Company Website" 
                link="https://bosalinas.github.io/Horiseon-website/"
                text="Project for one-page scroll website."
                git="https://github.com/bosalinas/Horiseon-website"
            />
        </div>
    )
}



// export default function Portfolio() {
//    const projects = useState([
//         {
//             projectName:"Yass Flix",
//             link:"https://bosalinas.github.io/ShowBox/",
//             img:""
//         },
//         {
//             projectName:"Project 2",
//             link:"https://bosalinas.github.io/ShowBox/",
//             img:""
//         },
//         {
//             projectName:"Project 3",
//             link:"https://bosalinas.github.io/ShowBox/",
//             img:""
//         }
//    ]);
//    return (
//     <div> 
//         {projects.map((project, index) => (
//             <Project project={project}
//             key={"project" + index} />
//         ))}
//     </div>
//    )
// }