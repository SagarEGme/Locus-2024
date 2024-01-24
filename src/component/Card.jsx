import React from 'react'
import './card.css'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Card = ({ photoURL, name, area, fb, gh, ig }) => {
    return (
        <div className='card'>
            <img src={photoURL} alt="" className='image' />
            <h3>{name}</h3>
            <h5>{area}</h5>
            <div className="social-links">

                <p><a href={fb}><FaFacebook />
                </a></p>
                <p><a href={gh}><FaGithub />
                </a></p>
                <p><a href={ig}><FaInstagram />
                </a></p>
            </div>
        </div>
    )
}

export default Card
