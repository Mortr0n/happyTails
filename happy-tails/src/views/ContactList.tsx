import axios from 'axios';
import React, { useEffect } from 'react';
import { ContactType } from '../components/Types';

interface IProps {
    contacts: ContactType[];
    setContacts: Function;
}

const ContactList = (props: IProps) => {
    const { contacts, setContacts } = props;

    useEffect(() => {
        console.log("Use Effect fired")
        axios.get('http://localhost:8000/api/htContacts')
            .then((res) => {
                console.log(res.data)
                setContacts(res.data)
            })
            .catch((err) => console.log('Error getting all contacts ', err))
    }, [])

    return(
        <>
        <h1>Contact List</h1>
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                {
                    contacts.map((contact) =>{
                        return(
                            <tr>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.emailAddress}</td>
                            </tr>                            
                        )
                    })
                }
            </tbody>
        </table>
        
        
        </>
    )
}
export default ContactList;