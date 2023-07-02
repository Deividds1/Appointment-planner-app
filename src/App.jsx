import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Contacts from './components/Contacts';
import Appointments from './components/Appointments';
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('contacts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container'>
      <Header title="Appointment planner app" />
      <Nav activeTab={activeTab} onTabClick={handleTabClick} />
      {activeTab === 'contacts' ? <Contacts /> : <Appointments />}
    </div>
  );
}

export default App;
