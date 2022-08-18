import React from "react";

const NewAnimalPhotoForm = () => {
    

    return(
        <form action="/api/animalPhoto" encType="multipart/form-data" method="POST">
            <label htmlFor="animalPhotoTitle">Photo Title</label>
            <input className="animal-photo-text-input" type="text" name="animalPhotoTitle" />
            <label htmlFor="animalPhotoDescription">Description</label>
            <input className="animal-photo-text-input" type="text" name="animalPhotoDescription" />
            <label htmlFor="animalPhoto">Photo</label>
            <input className="animal-photo-text-input" type="file" name="animalPhoto" accept="image/*" />
            <input type="submit" value="Upload Photo" />
        </form>
    )
}

export default NewAnimalPhotoForm;