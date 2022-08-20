import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/MenuOutlined'
import Icon from '@mui/material/Icon';
import React from "react";
import '../css/Main.css'
import cat from '../images/pexels-ion-ceban-ionelceban-6768704.jpg';


const Main  = () => {
    // const [contacts, setContacts] = useState([] as ContactType[]);

    return(
        <>
            <div className="container d-flex flex-row flex-shrink ">
                <div className="mt-4 col-sm-10 d-flex justify-content-center d-flex">
                    <div className='mission-statement-div'>
                    <p className="mission-statement">To save the hungry, the helpless, the lost, and the little ones just struggling to survive; 
                                    to house and feed as many animals as possible; to ease the suffering of the weak and unloved.</p>
                    </div>
                    
                    <img className="temp-image" src={cat} alt="temp cat picture" />
                </div>
                {/* <div className="main-gallery-div d-flex offset-1 col-sm-6 flex-shrink">
                    
                </div> */}
            </div>
        </>
    )
}
export default Main;