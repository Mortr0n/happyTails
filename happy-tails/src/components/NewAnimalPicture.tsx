import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormGroup, FormLabel, Input, Modal } from "@mui/material";
import React from "react";

interface IProps {
    showAddAnimalForm: boolean;
    addAnimalPhoto: Function;
}

const NewAnimalPicture = (props: IProps) => {
    const { showAddAnimalForm, addAnimalPhoto } = props;


    const handleAnimalPhotoFormClose = () => {

    }

    

    const handleAddAnimalPhoto = (e: any) => {
        e.preventDefault();
    }


    return(
        <>
            <Dialog
                open={showAddAnimalForm}
                onClose={handleAnimalPhotoFormClose}
            >
                <DialogTitle>Add Pet's Photo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please add a photo of the animal that you would like to put of for adoption first.
                    </DialogContentText>
                    <FormGroup>
                        <form  method="POST" action="localhost:8000/api/singleFile" encType="multipart/form-data">
                            <div>
                                <FormLabel>Add Photo:</FormLabel>
                                <Input type="file" name="file"></Input>
                            </div>
                            <Button onClick={(e) => handleAddAnimalPhoto(e)}  variant="outlined" type="submit">Add Photo</Button>
                        </form>
                    </FormGroup>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default NewAnimalPicture;