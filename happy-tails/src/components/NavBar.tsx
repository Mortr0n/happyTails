import { Link } from '@reach/router';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../images/HPTransparentTry1.png';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const navItems = [
        "About",
        "Adopt",
        "Foster",
        "Spay",
        "Surrender",
        "Success",
        "Posts",
    ]



    return(
        <div className='nav-outer-div d-flex flex-row justify-content-between'>
                <div className='' id='list-div'>
                    <ul className='nav-bar-ul d-flex flex-row justify-content-start'>
                        {
                            navItems.map((item) => {
                                return(
                                    <NavLink key={item} className={`link-item-${item} link-items`} to={`${item}`} ><li className='nav-items nav-background'>{item}</li></NavLink> 
                                )
                                
                            })
                        }
                    </ul>
                </div>
                <MenuIcon fontSize='large' color="primary" className='menu-icon' />
        </div>
        
    )
}

export default NavBar;