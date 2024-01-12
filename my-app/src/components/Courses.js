import React from 'react';

const Courses = () => {
    const courses = [
        "Scalable Data Analytics",
        "Human-Computer Interaction",
        "Data Visualization",
        "Computer Security",
        "Computer Networks",
        "Web-Based Systems",
        "Software Project Management",
        "Software Design",
        "Database Management Systems",
        "Data Structures and Algorithms",
        "Software Development",
        "Software Testing and Reliability",
        "Software Requirements",
        "Software Architecture",
        "Programming Fundamentals",
        "Operating Systems",
        "Embedded Systems Interfacing",
        "Digital Circuits"
    ];

    return (
        <div className="grid lg:grid-cols-3 gap-4 mt-4">
            {courses.map((course, index) => (
                <div key={index} className={`py-2 px-6 rounded-md shadow-md
                 ${index % 3 === 0 || index % 3 === 2 ? 'bg-blue-600' : 'bg-gray-800'}`}>
                <h3 className={`font-bold text-lg mb-2 text-center
                 ${index % 3 === 0 || index % 3 === 2 ? 'text-white' : 'text-gray-400'}`}>{course}</h3>
                </div>
                ))}
        </div>
    );
};

export default Courses;
