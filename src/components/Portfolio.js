import React, { useState } from 'react';
import Project from "./Project";

export default function Portfolio() {
    return (
        <div className="projects">
            <Project 
                projectName="Yass Flix" 
                link="https://bosalinas.github.io/ShowBox/"
            />
            <Project 
                projectName="Project 2" 
                link="https://bosalinas.github.io/ShowBox/"
            />
            <Project 
                projectName="Project 3" 
                link="https://bosalinas.github.io/ShowBox/"
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