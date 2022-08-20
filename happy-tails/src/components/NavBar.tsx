import { Link } from '@reach/router';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../images/HPTransparentTry1.png';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const navItems = [
        "Adopt",
        "Foster",
        "Spay",
        "Surrender",
        "Success",
        "Posts",
    ]



    return(
        <nav className='nav-outer-div navbar  d-flex flex-row justify-content-between'>
            <div className='container'>
                <div className='nav-title-div nav-background'>
                    <NavLink className='link-title' to="/">
                        <img className='logo' src={logo} alt='Happy Tails Logo' />
                    </NavLink>{" "}
                </div>
                <div className='col-md-6 d-flex' id='list-div'>
                    <ul className='nav-bar-ul nav-background d-flex flex-row justify-content-start'>
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
           
        </nav>
        
    )
}

export default NavBar;