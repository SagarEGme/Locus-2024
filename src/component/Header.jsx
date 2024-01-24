import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css"
// import img from '../assests/favIcon.png'

const Header = () => {
    return (
        <header>
            <div className="items">
                {/* <div className="logo">
                    <img src={img} alt="" />
                </div> */}
                <span><NavLink to="/">Home</NavLink></span>
                <span><NavLink to="/team">Team</NavLink></span>
                <span><NavLink to="/pulchowk">Charts</NavLink></span>
                <span><NavLink to="/about">About</NavLink></span>
            </div>
        </header>
    )
}

export default Header
