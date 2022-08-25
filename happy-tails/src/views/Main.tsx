import React from "react";
import '../css/Main.css'
import logo from '../images/memoryHPLogoResizedTransparent.png';;



const Main  = () => {
    // const [contacts, setContacts] = useState([] as ContactType[]);

    return(
        <div className='main-wrapper'>
            <div className='image-div'>
                <img className='logo-image' src={logo} alt="Memory Logo" />
            </div>
            
        </div>

    )
}
export default Main;