import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ContactType } from './components/Types';
import './css/Background.css'
import Main from './views/Main';
import ContactForm from './components/ContactForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import LogReg from './views/LogReg';
import AddContent from './views/AddContent';
import logo from './images/HPTransparentTry1.png'
import About from './views/About';
import Index from './views/Index';
import Adopt from './views/Adopt';



function App() {
  const [contacts, setContacts] = useState([] as ContactType[]);

  // Making a go to const so that I can get around the typing with @reach/router FML No more @reach/router now
  // const GoToMain = (props: RouteComponentProps) => <Main />
  // const GoToContactForm = (props: RouteComponentProps) => <ContactForm contacts={contacts} setContacts={setContacts} />


  return (
    <div className="App bg">
      <div className='wrapper'>
        <header className='main-head'>
          <NavLink className='link-title' to="/">
              <img className='logo' src={logo} alt='Happy Tails Logo' />
          </NavLink>{" "}  
        </header>
        <nav className='main-nav'>
          <NavBar  />
        </nav>
        <div className='side'></div>
        <div className='content'>
          <Routes>
            <Route path="/login" element={<LogReg />} />
            <Route path="/" element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path="/happyTails/createContact" element={<ContactForm contacts={contacts} setContacts={setContacts} />} />
            <Route path="/happyTails/user/addContent" element={<AddContent />} />
            <Route path="/happyTails/uploadPhoto" element={<Index />} />
            {/* <Route path="/happyTails/user/addAnimal" /> */}
            <Route path="/Adopt" element={<Adopt />} />
          </Routes>
        </div>
        <div className='side2'></div>
        <footer className='main-footer'></footer>
      </div>
      
        
    </div>
  );
}

export default App;
