import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ContactType } from './components/Types';
import './css/Background.css'
import Main from './views/Main';
import ContactForm from './components/ContactForm';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [contacts, setContacts] = useState([] as ContactType[]);

  // Making a go to const so that I can get around the typing with @reach/router FML No more @reach/router now
  // const GoToMain = (props: RouteComponentProps) => <Main />
  // const GoToContactForm = (props: RouteComponentProps) => <ContactForm contacts={contacts} setContacts={setContacts} />


  return (
    <div className="App bg">
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="createContact" element={<ContactForm contacts={contacts} setContacts={setContacts} />} />
          {/* <GoToMain path="/Main"  />
          <GoToContactForm path='/contacts' /> */}
        </Routes>
    </div>
  );
}

export default App;
