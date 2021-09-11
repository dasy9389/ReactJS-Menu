import React from "react";
import Home from './section/Home.js';
import About from './section/About.js';
import Blog from './section/Blog.js';
import Contact from './section/Contact.js';
import Login from './section/Login.js';
import {Switch,Route} from 'react-router-dom';

class Section extends React.Component{
    render(){
        return(
            <section>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/blog' component={Blog} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route path='/login' component={Login} />
                </Switch>
            </section>
        );
    }
}

export default Section;