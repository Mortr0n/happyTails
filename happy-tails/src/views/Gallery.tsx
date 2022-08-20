import React from 'react';
import cat from '../images/pexels-ion-ceban-ionelceban-6768704.jpg';
import '../css/Gallery.css';

const Gallery = () => {


    return(
        <div className="main-gallery-div ">
            <img className="temp-image" src={cat} alt="temp cat picture" />
        </div>
    )

}
export default Gallery;