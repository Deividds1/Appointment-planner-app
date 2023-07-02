import React from 'react';

function AppointmentList({ appointments }) {
    return (
        <ul>
            {appointments.map((appointment, index) => (
                <li className='list' key={index}>
                    <p><strong>Subject:</strong> {appointment.subject}</p>
                    <p><strong>Contact:</strong> {appointment.contact}</p>
                    <p><strong>Date:</strong> {appointment.date}</p>
                    <p><strong>Time:</strong> {appointment.time}</p>
                </li>
            ))}
        </ul>
    );
}

export default AppointmentList;
