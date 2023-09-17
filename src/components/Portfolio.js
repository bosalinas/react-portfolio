import React from 'react';
import Project from "./Project";
import gsd from "../assets/images/GSD.png";
import flix from "../assets/images/yasflix.png";

export default function Portfolio() {
    return (
        <div className="projects">
            <Project 
                img={flix}
                projectName="Yass Flix" 
                link="https://bosalinas.github.io/ShowBox/"
                text="Text for project 1"
            />
            <Project 
                img={gsd}
                projectName="Get Sh*t Done" 
                link="https://gsdone-2f10065746b9.herokuapp.com/"
                text="Text for project 2"
            />
            <Project 
                img={gsd}
                projectName="Project 3" 
                link="https://github.com/bosalinas?tab=repositories"
                text="Text for project 3"
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