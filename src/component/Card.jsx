import React from 'react'
import './card.css'
import { FaFacebook, FaGithub,  FaLinkedin } from "react-icons/fa";

const Card = ({ photoURL, name, area, fb, gh, lk }) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={photoURL} alt="" />
            </div>
            <h3>{name}</h3>
            <h5>{area}</h5>
            <div className="social-links">

                <p><a target="_blank" href={fb}><FaFacebook />
                </a></p>
                <p><a target="_blank" href={gh}><FaGithub />
                </a></p>
                <p><a target="_blank" href={lk}><FaLinkedin />
                </a></p>
            </div>
        </div>
    )
}

export default Card
