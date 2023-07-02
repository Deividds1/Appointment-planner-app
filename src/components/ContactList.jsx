import React from 'react';

function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map((contact, index) => (
                <li className='list' key={index}>
                    {contact.name} - {contact.phone} - {contact.email}
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
