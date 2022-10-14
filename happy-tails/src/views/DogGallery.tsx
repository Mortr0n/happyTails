import React, { useEffect } from 'react';
import '../css/Gallery.css';
import axios from 'axios';
import { NewAnimalType } from './Types';
import '../css/Adopt.css';

interface IProps {
    dogs: NewAnimalType[];
}

const DogGallery = (props: IProps) => {
    const { dogs } = props;

    


    return(
        <>
        <h3>These good boys and good girls are looking for a place to call home and a family all their own.</h3>
        <div className="main-gallery-div">
            
            {
                dogs.map((dog) => {
                    return(
                        <div className='animal-to-adopt'>
                            <div className='adopt-item-row'>
                                {/* <h2>Name: </h2> */}
                                <p className='adopt-item'>{dog.name}</p>
                            </div>
                            
                            <h4><span className='bold'>Breed:</span> {dog.breed}</h4>
                            <h4><span className='bold'>Coat Length:</span> {dog.coatLength}</h4>
                            <h4 className='maxWidth'><span className='bold'>Description:</span> {dog.description}</h4>
                            <img className='adoption-images' src={dog.animalPhoto} height="400"/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )

}
export default DogGallery;