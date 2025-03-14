import React from 'react';
import './Hiring.css';
const Hiring = () => {
    const companyDetails = {
        name: "Tech Innovators Inc.",
        location: "San Francisco, CA",
        description: "We are a leading tech company specializing in innovative solutions."
    };

    const roles = [
        {
            title: "Frontend Developer",
            description: "Responsible for developing and maintaining the user interface.",
            requirements: ["React", "JavaScript", "CSS"]
        },
        {
            title: "Backend Developer",
            description: "Responsible for server-side application logic and integration.",
            requirements: ["Node.js", "Express", "MongoDB"]
        },
        {
            title: "Full Stack Developer",
            description: "Responsible for both frontend and backend development.",
            requirements: ["React", "Node.js", "Express", "MongoDB"]
        }
    ];

    return (
        <div>
            <h1>Hiring at {companyDetails.name}</h1>
            <p>Location: {companyDetails.location}</p>
            <p>{companyDetails.description}</p>
            
            <h2>Open Roles</h2>
            {roles.map((role, index) => (
                <div key={index}>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                    <h4>Requirements:</h4>
                    <ul>
                        {role.requirements.map((requirement, idx) => (
                            <li key={idx}>{requirement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Hiring;