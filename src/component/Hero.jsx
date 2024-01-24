import React, { useState, useRef } from 'react'
import "./hero.css"
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Hero = () => {
    const [cityName, setCityName] = useState("");
    const [addcity, setAddcity] = useState("");
    const [citylist, setCityList] = useState([]);

    const navigate = useNavigate();
    const showCity = () => {
        if (cityName === "pulchowk") {
            navigate("/pulchowk");
        } else {
            navigate("/404")
        }
    }
    const addCityfn = () => {
        setCityList([...citylist, addcity]);
    }
    return (
        <div className='hero'>
            <div className="left">
                <div className="content">
                    <h2>Pollution Tracker</h2>
                    <span>Know air condition and breathe better!!</span>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter a city name" value={cityName} onChange={(e) => { setCityName(e.target.value); e.preventDefault() }} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            showCity();

                        }
                    }} />
                    <span onClick={showCity}><CiSearch /></span>
                </div>
            </div>
            <div className="right">
                <div className="right-container">
                    <div className="request">
                        <h4>Add city :</h4>
                        <div className="search">
                            <input type="text" placeholder="Enter a city name" onChange={(e) => {
                                setAddcity(e.target.value)
                            }} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addCityfn();
                                    e.target.value = ""

                                }
                            }} />
                            <span onClick={addCityfn}><FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <h2>List of available cities</h2>
                    <ol>
                        <li>Pulchowk</li>
                    </ol>
                    <h3>{citylist.length > 0 ? "Pending " : "Add "}Requests for cities:</h3>
                    <ul>
                        {citylist.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Hero
