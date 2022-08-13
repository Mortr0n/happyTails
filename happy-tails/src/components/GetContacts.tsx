import axios from 'axios';
import React, { useEffect } from 'react';
import { ContactType } from './Types';

interface IProps {
    contacts: ContactType[];
    setContacts: Function;
}

const GetContacts = (props: IProps) => {
    const { contacts, setContacts } = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/htContacts`)
            .then((res) => {
                setContacts(res.data);
            })
            .catch((err) => console.log("Axios Get Contacts Error ", err))
    },[])

    return(
        <></>
    )
}
export default GetContacts;