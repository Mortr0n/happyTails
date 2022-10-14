import React from 'react';
import { NewAnimalType } from './Types';

interface IProps {
    cats: NewAnimalType[];
}


const CatGallery = (props: IProps) => {

    return(
        <>
            <h3>These wonderful feeline friends need you to help them find their forever home.</h3>
            <div className='main-gallery-div'>
            </div>
        </>
        
    )
}
export default CatGallery;