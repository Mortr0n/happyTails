import React from "react";
import '../css/Main.css'
import cat from '../images/pexels-ion-ceban-ionelceban-6768704.jpg';


const Main  = () => {
    // const [contacts, setContacts] = useState([] as ContactType[]);

    return(
        <>
            <div className="container d-flex flex-row">
                <div className="mt-4 col-6 d-flex justify-content-center">
                    <p className="mission-statement">To save the hungry, the helpless, the lost, and the little ones just struggling to survive; to house and feed as many animals as possible; to ease the suffering of the weak and unloved.</p>
                </div>
                <div className="main-gallery-div d-flex offset-1 col-6">
                    <img className="temp-image" src={cat} alt="temp cat picture" />
                </div>
            </div>
        </>
    )
}
export default Main;