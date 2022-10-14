import axios from "axios";
import e from "express";
import React, { useState } from "react";
import { NewAnimalType } from "../views/Types";

const NewAnimalForm = () => {
    const [newAnimal, setNewAnimal] = useState({} as NewAnimalType);
    
    // const handleCreateAnimal = (e: any) => {
    //     e.preventDefault();
    //     console.log(newAnimal);
    // }

    const handleInputChange = (e: any) => {
        setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
    }

    // handle and convert image to base 64
    const handleImage = (e: any) => {
        const file = e.target.files[0];
        setFileToBase64(file, e);
        console.log(file);
    }

    const setFileToBase64 = (file: any, e: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setNewAnimal({...newAnimal, [e.target.name]: reader.result});
        }
    }

    const handleCreateAnimal = (e: any) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/animalsForAdoption`, newAnimal,
        {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Error adding animal in post", err);
            })
    }

    return(
        <div className="form-wrapper-div">
            {/* <form className="add-animal-form" action="/api/animalPhoto" encType="multipart/form-data" method="POST"> */}
            <form className="add-animal-form" onSubmit={(e) => handleCreateAnimal(e)} method="POST">
                
                <label htmlFor="name">Pet's Name</label>
                <input 
                    className="new-animal-input" 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={(e) => handleInputChange(e)} 
                />
                
                <div className="radio-group">
                    <h3>Dog or Cat?</h3>
                    <label htmlFor="dog">Dog</label> 
                    <input 
                        className="new-animal-radio" 
                        type="radio"  
                        id="dog" 
                        name="dog" 
                        value="true" 
                    />
                    <label htmlFor="cat">Cat</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"  
                        id="cat" 
                        name="dog" 
                        value="false" 
                    />
                </div>
                
                <label htmlFor="breed">Breed</label>
                <input 
                    className="new-animal-input" 
                    type="text"
                    id="breed" 
                    name="breed" 
                    onChange={(e) => handleInputChange(e)} 
                />
                
                <label htmlFor="coatLength">Coat Length</label>
                <input 
                    className="new-animal-input" 
                    type="text" 
                    id="coatLength" 
                    name="coatLength" 
                    onChange={(e) => handleInputChange(e)}
                />
                
                <div className="radio-group">
                    <h3>House Trained?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"  
                        id="true" 
                        name="houseTrained" 
                        value="true" 
                        onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="cat">No</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"  
                        id="false" 
                        name="houseTrained" 
                        value="false" 
                        onChange={(e) => handleInputChange(e)} 
                    />
                </div>
                
                <div className="radio-group">
                    <h3>Vaccinations up to date?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"   
                        name="vaccinationsUpToDate" 
                        value="true" 
                        onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="cat">No</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"   
                        name="vaccinationsUpToDate" 
                        value="false" 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                
                <div className="radio-group">
                    <h3>Spayed/Neutered?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"   
                        name="spayedOrNeutered" 
                        value="true" 
                        onChange={(e) => handleInputChange(e)}
                    />
                    <label htmlFor="cat">No</label>
                    <input 
                        className="new-animal-radio" 
                        type="radio"   
                        name="spayedOrNeutered" 
                        value="false" 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                
                <label htmlFor="description">Animal Description</label>
                <textarea 
                    className="new-animal-textArea"  
                    name="description" 
                    rows={4} 
                    cols={50} 
                    onChange={(e) => handleInputChange(e)}
                />
                
                <div className="animal-photo-container">
                    <label htmlFor="image">Animal Photo</label> 
                    <input 
                        className="form-control" 
                        type="file"  
                        id="formupload" 
                        name="animalPhoto"  
                        onChange={(e) => handleImage(e)}
                    />
                </div>
                
                <input type="submit" value="Add Animal" />
            </form>
        </div>
    )
}

export default NewAnimalForm;