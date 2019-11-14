import React from 'react';
import './Layout.css'
import {NavLink} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <div className="Nav">
                <ul>
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/list">List</NavLink></li>
                </ul>
                <div className="spacer"/>
                <button className="btn btn-outline-primary">login</button>
            </div>
            {props.children}
        </>
    );
}

export default Layout;
