import axios from "axios";
import React, {useEffect, useState} from "react";
import '../css/ContactForm.css';
import { ContactType } from "./Types";

interface IProps {
    contacts: ContactType[];
    setContacts: Function;
}

const ContactForm = (props: IProps) => {
    const { contacts, setContacts } = props;
    const [contactToCreate, setContactToCreate] = useState({})

    const handleInputChange = (e: any) => {
        console.log("Value : ", e.target.value)
        setContactToCreate({...contactToCreate, [e.target.name]: e.target.value }) 
    }

    console.log("Contact",contactToCreate)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/htContacts`, contactToCreate)
            .then((res) => {
                console.log("Created Contact ", res.data)
            })
            .catch((err) => console.log("Error creating contact with axios ", err))
    } 



    return(
        <div className="d-flex container col-12 justify-content-center">
            <form >
                <div className="form-div d-flex flex-column justify-content-end ">
                    <div className="d-flex flex-row">
                        <label className="label d-flex">First Name</label>
                        <input className="form-inputs" type='text' name="firstName" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <label className="label d-flex justify-content-end">Last Name </label>
                        <input className="form-inputs" type='text' name="lastName" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <label className="label d-flex justify-content-end">Email</label>
                        <input className="form-inputs" type='emailAddress' name="emailAddress" onChange={(e) => handleInputChange(e)} />
                    </div>
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Send me your info!</button>
            </form>
        </div>
        
    )
    

}

export default ContactForm;