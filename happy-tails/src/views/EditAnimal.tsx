import { useParams } from 'react-router-dom';
import React from 'react';

interface IProps {

}


const EditAnimal = (props: IProps) => {
    const { animalId } = useParams();

    return(
        <>
        <h2>Edit Animal { animalId }</h2>

        </>
    )
}

export default EditAnimal;