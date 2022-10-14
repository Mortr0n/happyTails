import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewAnimalForm from "../components/NewAnimalForm";
import NewAnimalPicture from "../components/NewAnimalPicture";
import { NewAnimalType } from "./Types";

const AddContent = () => {
    const [showAddAnimalForm, setShowAddAnimalForm] = useState(false);
    const [newAnimal, setNewAnimal] = useState({} as NewAnimalType);
    const navigate = useNavigate();

    const addAnimalPhotoClick = () => {
        setShowAddAnimalForm(!showAddAnimalForm);
    }

    const addAnimalPhotoHandler = (newPhotoInfo: any) => {
        axios.post(`http://localhost:8000/api/singleFile`, newPhotoInfo,
        {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
                let newAnimalCopy = {...newAnimal, animalPhoto: res.data._id};
                setNewAnimal(newAnimalCopy);
            })
            .catch((err) => {
                console.log("Error adding picture in post", err);
            })
            .finally(() => {
                navigate('/Adopt')
            })
    }

    return(
        <>
            <h1>Add Content</h1>
            <h3>Please add a picture first</h3>
            <button className="submitButton" onClick={addAnimalPhotoClick} >Add Animal Photo</button>
            {
                <>
                    {
                        showAddAnimalForm &&
                        <NewAnimalPicture
                            showAddAnimalForm={showAddAnimalForm}
                            addAnimalPhoto={addAnimalPhotoHandler}
                        />
                    }
                    {

                    }
                    <NewAnimalForm />
                </>
            }
        </>
        
        
    )
}

export default AddContent;