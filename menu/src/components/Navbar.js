import React, { userState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Button from "./Button";
import './Navbar.css';

function Navbar(){
    const [click, setClick] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to = '/' className='navbar-logo'>EPIC <i className='fab fa-firstdraft'></i></Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMobileMenu} className='nav-links'>Home</Link>
                    </li>
                    <li 
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' onClick={closeMobileMenu} className='nav-links'>Services <i className='fas fa-caret-down'></i></Link>
                        { dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' onClick={closeMobileMenu} className='nav-links'>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' onClick={closeMobileMenu} className='nav-links'>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' onClick={closeMobileMenu} className='nav-links'>Sign Up</Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;