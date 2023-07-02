import React, { useState } from 'react';
import contacts from '../data/contacts';

function AppointmentForm({ onAddAppointment }) {
    const [subject, setSubject] = useState('');
    const [selectedContact, setSelectedContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAppointment = {
            subject,
            contact: selectedContact,
            date,
            time,
        };

        onAddAppointment(newAppointment);

        setSubject('');
        setSelectedContact('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
            />
            <select
                value={selectedContact}
                onChange={(e) => setSelectedContact(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select Contact
                </option>
                {contacts.map((contact) => (
                    <option key={contact.id} value={contact.id}>
                        {contact.name}
                    </option>
                ))}
            </select>
            <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type="submit">Add Appointment</button>
        </form>
    );
}

export default AppointmentForm;
