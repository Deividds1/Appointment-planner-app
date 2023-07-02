import React from 'react';
import '../styles/Nav.css';

function Nav({ activeTab, onTabClick }) {
    return (
        <nav>
            <ul>
                <li className={activeTab === 'contacts' ? 'active' : ''}>
                    <a href="#" onClick={() => onTabClick('contacts')}>
                        Contacts
                    </a>
                </li>
                <li className={activeTab === 'appointments' ? 'active' : ''}>
                    <a href="#" onClick={() => onTabClick('appointments')}>
                        Appointments
                    </a>
                </li>
            </ul>
            <div className='line'></div>
        </nav>
    );
}

export default Nav;
