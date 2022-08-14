import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ContactType } from './components/Types';
import './css/Background.css'
// import { Router, RouteComponentProps } from '@reach/router';
import Main from './views/Main';
// import { Router } from 'react-router-dom';
import { RouteComponentProps, Router } from '@reach/router';
// import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Redirect } from '@reach/router';
import ContactForm from './components/ContactForm';



function App() {
  const [contacts, setContacts] = useState([] as ContactType[]);

  const GoToMain = (props: RouteComponentProps) => <Main />
  const GoToContactForm = (props: RouteComponentProps) => <ContactForm contacts={contacts} setContacts={setContacts} />

  


  return (
    <div className="App bg">
      <NavBar />
        <Router>
          <GoToMain path="/"  />
          <GoToContactForm path='/contacts' />
        </Router>
      
      
      
      {/* <GetContacts
        contacts={contacts}
        setContacts={setContacts}
      />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
      /> */}
    </div>
  );
}



export default App;
