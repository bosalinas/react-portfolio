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
                </div>
            </div>
    )
}

// import React from 'react';
// import "./Project.css";
// import { useState } from 'react';


// export default function Project(props) {
//     const [isHovering, setIsHovering] = useState(false);

//     const handleMouseOver = () => {
//         setIsHovering(true);
//     };
//     const handleMouseOut = () => {
//         setIsHovering(false);
//     };
//     return (
//             <div className='project-card' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//                 {isHovering && (
//                 <a href={props.link}><img src={props.img} /></a>)}
//                 <h3>
//                     {props.projectName}
//                 </h3>
//                 <div className='info-group'>
//                     <p>Text for the project</p>
//                 </div>
//             </div>
//     )
// }
