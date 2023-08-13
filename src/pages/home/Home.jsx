import React from 'react'
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
      <Navbar />
      <div className="hero-section">
        hi i am hero section.
      </div>
      </div>
    </div>
  )
}

export default Home

