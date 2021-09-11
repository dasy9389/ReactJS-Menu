import React from "react";
import Home from './section/Home.js';
import About from './section/About.js';
import Blog from './section/Blog.js';
import Contact from './section/Contact.js';
import Login from './section/Login.js';
import {Route} from 'react-router-dom';

class Section extends React.Component{
    render(){
        return(
            <section>
                <Route path='/' component={Home} exact />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
            </section>
        );
    }
}

export default Section;