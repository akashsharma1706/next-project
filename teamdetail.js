// pages/aboutus/teamDetails.js

import { useRouter } from 'next/router';
import React from 'react';

const TeamDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ];

    const member = details.find(member => member.id === parseInt(id));

    return (
        <div>
            {member ? (
                <>
                    <h1>{member.name}</h1>
                    <p>{member.role}</p>
                </>
            ) : (
                <h1>Developer doesn't exist</h1>
            )}
        </div>
    );
};

export default TeamDetails;
