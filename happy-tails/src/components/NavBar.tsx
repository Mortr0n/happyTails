import { Link } from '@reach/router';
import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
    const navItems = [
        "Adopt",
        "Foster",
        "Spay",
        "Surrender",
        "Donate",
        "Success",
        "Posts"
    ]



    return(
        <div className='nav-outer-div'>
            <ul className='nav-bar nav-background d-flex flex-row justify-content-between'>
                <div className='nav-title-div nav-background'>
                    <Link className='link-title' to="Main"><h4 className='nav-title'>Big Sky Happy Tails</h4></Link>{" "}
                </div>            
                {
                    navItems.map((item) => {
                        return(
                            <li className='nav-items nav-background'>{item}</li>
                        )
                        
                    })
                }
            </ul>
        </div>
        
    )
}

export default NavBar;