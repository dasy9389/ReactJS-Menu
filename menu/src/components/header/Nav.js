import React from "react";
import {Link, NavLink} from 'react-router-dom';

class Nav extends React.Component{
    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle});
    }

    render(){
        const {toggle} =this.state;
        return(
            <>
                <ul className={toggle ? 'toggle' : ''}>
                    <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to='/blog' activeClassName="active">Blog</NavLink></li>
                    <li><NavLink exact to='/contact' activeClassName="active">Contact</NavLink></li>
                    <li><NavLink exact to='/about' activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to='/login' activeClassName="active">Login / Register</NavLink></li>
                    <li className='close' onClick={this.menuToggle}>X</li>
                </ul>
                <div className='menu' onClick={this.menuToggle}>Menu</div>
            </>
        );
    }
}

export default Nav;