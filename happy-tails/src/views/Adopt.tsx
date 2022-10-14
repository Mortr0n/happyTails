import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CatGallery from './CatGallery';
import DogGallery from './DogGallery';
import { NewAnimalType } from './Types';
import '../css/Adopt.css';

const Adopt = () => {
    const [animals, setAnimals] = useState([{}] as NewAnimalType[]);
    const [dogs, setDogs] = useState([{}] as NewAnimalType[]);
    const [cats, setCats] = useState([{}] as NewAnimalType[]);
    const [showDogs, setShowDogs] = useState(true);


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
        <div className='gallery-container'>
            
            <div className='adoption-choice-container'>
                <Button 
                    className='dog-button'
                    onClick={() => setShowDogs(true)}
                    variant="contained"
                >
                    Dogs
                </Button>
                <Button 
                    className='cat-button'
                    onClick={() => setShowDogs(false)}
                    variant="contained"
                >
                    Cats
                </Button>
            </div>
            {
                showDogs ?
                    <DogGallery 
                        dogs={animals}
                    />
                :
                    <CatGallery
                        cats={cats}
                    />
            }
            
        </div>
    )
}
export default Adopt;