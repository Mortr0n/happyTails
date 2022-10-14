import React, { useEffect } from 'react';
import '../css/Gallery.css';
import axios from 'axios';
import { NewAnimalType } from './Types';
import '../css/Adopt.css';
import { Button } from '@material-ui/core';
import { pink } from '@mui/material/colors';
import { navigate } from '@reach/router';
import { useNavigate } from 'react-router-dom';



interface IProps {
    dogs: NewAnimalType[];
}

const DogGallery = (props: IProps) => {
    const { dogs } = props;
    const navigate = useNavigate();
    const myPink = pink[300];


    return(
        <>
            <h3>These good boys and good girls are looking for a place to call home and a family all their own.</h3>
            <div className="main-gallery-div">
                
                {
                    dogs.map((dog, idx) => {
                        return(
                            <div key={idx} className='animal-to-adopt'>
                                <div className='adopt-item-row'>
                                    {/* <h2>Name: </h2> */}
                                    <p className='adopt-item'>{dog.name}</p>
                                </div>
                                
                                <h4><span className='bold'>Breed:</span> {dog.breed}</h4>
                                <h4><span className='bold'>Coat Length:</span> {dog.coatLength}</h4>
                                <h4 className='maxWidth'><span className='bold'>Description:</span> {dog.description}</h4>
                                <img className='adoption-images' src={dog.animalPhoto} height="400"/>
                                <div className='button-div'>
                                <Button 
                                    className='cat-button'
                                    // onClick=""
                                    variant="contained"
                                    color="primary"
                                >
                                    Adopt
                                </Button>
                                {/* //TODO: set this to only show for admins */}
                                <Button 
                                    className='cat-button'
                                    onClick={() => navigate(`/user/editAnimal/${idx}`)}
                                    variant="contained"
                                    color="primary"
                                >
                                    Edit
                                </Button>
                                </div>    
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
export default DogGallery;