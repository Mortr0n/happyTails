import React from "react";

const NewAnimalForm = () => {
    
    const handleCreateAnimal = (e: any, postData: object) => {
        e.preventDefault();
    }

    return(
        <div className="form-wrapper-div">
            <form className="add-animal-form" action="/api/animalPhoto" encType="multipart/form-data" method="POST">
                <label htmlFor="name">Pet's Name</label>
                <input className="new-animal-input" type="text" id="name" name="name" />
                <div className="radio-group">
                    <h3>Dog or Cat?</h3>
                    <label htmlFor="dog">Dog</label> 
                    <input className="new-animal-radio" type="radio"  id="dog" name="dog" value="true" />
                    <label htmlFor="cat">Cat</label>
                    <input className="new-animal-radio" type="radio"  id="cat" name="dog" value="false" />
                </div>
                <label htmlFor="breed">Breed</label>
                <input className="new-animal-input" type="text" id="breed" name="breed" />
                <label htmlFor="coatLength">Coat Length</label>
                <input className="new-animal-input" type="text" id="coatLength" name="coatLength" />
                <div className="radio-group">
                    <h3>House Trained?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input className="new-animal-radio" type="radio"  id="true" name="houseTrained" value="true" />
                    <label htmlFor="cat">No</label>
                    <input className="new-animal-radio" type="radio"  id="false" name="houseTrained" value="false" />
                </div>
                <div className="radio-group">
                    <h3>Vaccinations up to date?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input className="new-animal-radio" type="radio"   name="vaccinationsUpToDate" value="true" />
                    <label htmlFor="cat">No</label>
                    <input className="new-animal-radio" type="radio"   name="vaccinationsUpToDate" value="false" />
                </div>
                <div className="radio-group">
                    <h3>Spayed/Neutered?</h3>
                    <label htmlFor="dog">Yes</label>
                    <input className="new-animal-radio" type="radio"   name="spayedOrNeutered" value="true"/>
                    <label htmlFor="cat">No</label>
                    <input className="new-animal-radio" type="radio"   name="spayedOrNeutered" value="false"/>
                </div>
                <label htmlFor="description">Animal Description</label>
                <textarea className="new-animal-textArea"  name="description" rows={4} cols={50} />
                <input type="submit" value="" />
                <textarea className="new-animal-textArea"  name="description" rows={4} cols={50} />

                <input type="submit" value="Add Animal" />
            </form>
        </div>
    )
}

export default NewAnimalForm;