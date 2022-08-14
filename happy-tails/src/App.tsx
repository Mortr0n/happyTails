import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ContactType } from './components/Types';
import './css/Background.css'
import Main from './views/Main';
import { RouteComponentProps, Router } from '@reach/router';
import ContactForm from './components/ContactForm';



function App() {
  const [contacts, setContacts] = useState([] as ContactType[]);

  // Making a go to const so that I can get around the typing with @reach/router FML
  const GoToMain = (props: RouteComponentProps) => <Main />
  const GoToContactForm = (props: RouteComponentProps) => <ContactForm contacts={contacts} setContacts={setContacts} />


  return (
    <div className="App bg">
      <NavBar />
        <Router>
          <GoToMain path="/"  />
          <GoToContactForm path='/contacts' />
        </Router>
    </div>
  );
}

export default App;
