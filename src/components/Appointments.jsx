import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import appointments from '../data/appointments';

function Appointments() {
    const [appointmentsState, setAppointmentsState] = useState([appointments]);


    const handleAddAppointment = (newAppointment) => {

        appointments.push({
            subject: newAppointment.subject,
            contact: newAppointment.contact,
            date: newAppointment.date,
            time: newAppointment.time,
        });

        setAppointmentsState([...appointments]);

    };

    return (
        <div>
            <h2>Add Appointment</h2>
            <AppointmentForm onAddAppointment={handleAddAppointment} />
            <div className='line'></div>
            <h2>Appointment List</h2>
            <AppointmentList appointments={appointmentsState} />
        </div>
    );
}

export default Appointments;
