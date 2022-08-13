import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import ContactList from './views/ContactList';
import { ContactType } from './components/Types';
import GetContacts from './components/GetContacts';

function App() {
  const [contacts, setContacts] = useState([] as ContactType[]);


  return (
    <div className="App">
      <NavBar />
      <ContactForm 
        contacts={contacts}
        setContacts={setContacts}
      />
      <GetContacts
        contacts={contacts}
        setContacts={setContacts}
      />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  );
}

export default App;
