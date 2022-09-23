import React from "react";

const NewAnimalPhotoForm = () => {
    

    return(
        <form action="/api/animalPhoto" encType="multipart/form-data" method="POST">
            <label htmlFor="animalPhotoTitle">Photo Title</label>
            <input className="animal-photo-text-input" type="text" id="name" name="animalPhotoTitle" />
            {/* <label htmlFor="animalPhotoDescription">Description</label>
            <input className="animal-photo-text-input" type="text" name="animalPhotoDescription" /> */}
            <label htmlFor="animalPhoto">Photo</label>
            <input className="animal-photo-text-input" type="file"  id="image" name="image" />
            <input type="submit" value="" />
        </form>
    )
}

export default NewAnimalPhotoForm;