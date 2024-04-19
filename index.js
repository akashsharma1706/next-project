// pages/index.js

import React, { useState, useEffect } from 'react';

const IndexPage = () => {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        fetch('/api/meetups')
            .then(res => res.json())
            .then(data => {
                if (data && data.meetups) {
                    setMeetups(data.meetups);
                }
            })
            .catch(err => console.error('Error fetching meetups:', err));
    }, []);

    return (
        <div>
            <h1>Meetups</h1>
            <ul>
                {meetups.map(meetup => (
                    <li key={meetup._id}>{meetup.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
