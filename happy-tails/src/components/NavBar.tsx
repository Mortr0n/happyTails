import { Link } from '@reach/router';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../images/HPTransparentTry1.png';

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
        <div className='nav-outer-div d-flex flex-row justify-content-between'>
            <div className='nav-title-div nav-background'>
                <NavLink className='link-title' to="/">
                    <img className='logo' src={logo} alt='Happy Tails Logo' />
                </NavLink>{" "}
            </div>
            <div className='col-6'>
                <ul className='nav-bar nav-background d-flex flex-row justify-content-start'>
                    {
                        navItems.map((item) => {
                            return(
                                <NavLink className={`link-item-${item} link-items`} to={`${item}`} ><li className='nav-items nav-background'>{item}</li></NavLink> 
                            )
                            
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}

export default NavBar;