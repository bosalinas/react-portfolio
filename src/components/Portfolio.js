import React, { useState } from 'react';
import Project from "./Project";

export default function Portfolio() {
    return (
        <div className="projects">
            <Project 
                img="yasflix.png"
                projectName="Yass Flix" 
                link="https://bosalinas.github.io/ShowBox/"
            />
            <Project 
                img="./public/getshitdone.PNG"
                projectName="Get Sh*t Done" 
                link="https://gsdone-2f10065746b9.herokuapp.com/"
            />
            <Project 
                img=""
                projectName="Project 3" 
                link="https://github.com/bosalinas?tab=repositories"
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