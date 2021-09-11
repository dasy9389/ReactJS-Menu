import React from "react";
import Logo from "./header/logo";
import Nav from "./header/Nav";

class Header extends React.Component{
    render(){
        return(
            <header>
                <Logo />
                <Nav />
            </header>
        );
    }
}

export default Header;