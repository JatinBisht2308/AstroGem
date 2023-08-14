import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import AstroSarthi from "../../assets/astroSarthi.png";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Navbar />
        <div className="hero-section">
          <div className="left-hero">
            <h1>Unveil Destiny's Secrets with Gem Astrology</h1>
            <p>Explore the mystical world of astrology and gems with AstroGems. Discover celestial insights and adorn yourself with exquisite gem treasures for a cosmic journey like no other.</p>
            <div className="btn-cont">
              <button>GET STARTED</button>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="right-hero">
            <img src={AstroSarthi} alt="" />
          </div>
        </div>
      </div>
      <div className="rings">
        
      </div>
    </div>
  );
};

export default Home;
