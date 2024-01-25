import React from 'react'
import "./404.css"
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/");
  }
  return (
    <div className='notFound'>
      <h4>We dont have sensors in here .</h4>
      <p>Please add the city it in home page.</p>
      <button onClick={goHome}>Home Page</button>
    </div>
  )
}

export default Error
