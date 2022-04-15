import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import cartIcon from '../../images/icons/shopping-cart.png'
const Header = () => {
    return (
        <div className='container header d-flex justify-content-between align-items-center'>
            <img height={'50px'} src={logo} alt="logo" />
            <div>
                <ul className='pt-3'>
                    <li><img src={cartIcon}></img></li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;