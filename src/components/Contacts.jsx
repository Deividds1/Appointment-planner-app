
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import contacts from '../data/contacts'
import { useState } from 'react';

function Contacts() {
    const [contactsState, setContactsState] = useState([contacts]);


    const handleAddContact = (newContact) => {

        contacts.push({
            name: newContact.name,
            phone: newContact.phone,
            email: newContact.email
        });

        setContactsState([...contacts]);

    };


    return (
        <div>
            <h2>Add Contact</h2>
            <ContactForm onAddContact={handleAddContact} />
            <div className='line'></div>
            <h2>Contact List</h2>
            <ContactList contacts={contactsState} />

        </div>
    );
}

export default Contacts;
