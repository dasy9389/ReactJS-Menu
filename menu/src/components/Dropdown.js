import React, {useState} from "react";
import { Link } from "react-router-dom";
// import MenuItems from './MenuItems';
import './Dropdown.css'

function Dropdown(){
    const MenuItems = [
        {
            title: 'Marketing',
            path: '/marketing',
            cname: 'dropdown-link'
        },
        {
            title: 'Consulting',
            path: '/consulting',
            cname: 'dropdown-link'
        },
        {
            title: 'Design',
            path: '/design',
            cname: 'dropdown-link'
        },
        {
            title: 'Development',
            path: '/development',
            cname: 'dropdown-link'
        }
    ];
    
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
            <ul onClick={handleClick} className={ click ? 'dropdown-menu active' : 'dropdown-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={item.cname}
                                onClick={()=>setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </>
    );
}
export default Dropdown;