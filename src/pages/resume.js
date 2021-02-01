import React from 'react';

import '../styles/index.scss';
import resume from '../assets/Julian_Hecker_Developer.pdf';

function Resume() {
    return (
        <iframe
            src={resume}
            title="Julian Hecker Web Development Resume"
            width="100%"
            style={{
                display: 'block',
                height: '100vh',
                border: 'none',
            }}
        ></iframe>
    );
}

export default Resume;
