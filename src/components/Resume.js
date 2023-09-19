import React from 'react';
import pdf from '../assets/files/resume.pdf'

export default function Resume() {
    return (
        
        <div className='pdf-cont'>
            <div className='pdf'>
            <a href={pdf}>Click here to download my resume!</a>
            </div>
        </div>

    )
}