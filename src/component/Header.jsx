import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <header>
            <div className="items">
               <span><NavLink to="/" className={({isActive})=> isActive?"active":""}>Home</NavLink></span>
                <span><NavLink to="/about">About</NavLink></span>
                <span><NavLink to="/team">Team</NavLink></span>
            </div>
        </header>
    )
}

export default Header
