// pages/aboutus.js

import Link from 'next/link';
import React from 'react';

const developers = [
    { id: 1, name: 'Yash' },
    { id: 2, name: 'Vaibhav' },
    { id: 3, name: 'Suresh' }
];

const AboutUs = () => {
    return (
        <div>
            <h1>Developers</h1>
            <ul>
                {developers.map(developer => (
                    <li key={developer.id}>
                        <Link href={`/aboutus/${developer.id}`}>
                            <a>{developer.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutUs;
