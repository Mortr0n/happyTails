import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DogGallery from './DogGallery';
import { NewAnimalType } from './Types';

const Adopt = () => {
    const [animals, setAnimals] = useState([{}] as NewAnimalType[]);
    const [dogs, setDogs] = useState([{}] as NewAnimalType[]);
    const [cats, setCats] = useState([{}] as NewAnimalType[]);


    const getAnimalsForAdoption = () => {
        axios.get(`http://localhost:8000/api/animalsForAdoption`)
            .then((res) => {
                console.log(res.data);
                setAnimals(res.data);
            })
            .catch(err => console.log("Error getting animals : ", err));
    }

    useEffect(() => {
        getAnimalsForAdoption();
    }, []);

    return(
        <>
            <DogGallery 
                dogs={animals}
            />
        </>
    )
}
export default Adopt;