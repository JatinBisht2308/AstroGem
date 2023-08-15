import React from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/navbar/Navbar";
import AstroSarthi from "../../assets/astroSarthi.png";
import Z1 from "../../assets/zodiacs/ai1.png";
import Z2 from  "../../assets/zodiacs/ai2.png";
import Z3 from  "../../assets/zodiacs/ai3.png";
import Z4 from  "../../assets/zodiacs/ai4.png";
import Z5 from  "../../assets/zodiacs/ai5.png";
import Z6 from  "../../assets/zodiacs/ai6.png";
import Z7 from  "../../assets/zodiacs/ai7.png";
import Z8 from  "../../assets/zodiacs/ai8.png";
import Z9 from  "../../assets/zodiacs/ai9.png";
import Z10 from  "../../assets/zodiacs/ai10.png";
import Z11 from  "../../assets/zodiacs/ai11.png";
import Z12 from  "../../assets/zodiacs/ai12.png";
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
     <Marquee loop={0} speed={100} gradientColor={false} className="marq">
      <img src={Z1} alt="" />
      <img src={Z2} alt="" />
      <img src={Z3} alt="" />
      <img src={Z4} alt="" />
      <img src={Z5} alt="" />
      <img src={Z6} alt="" />
      <img src={Z7} alt="" />
      <img src={Z8} alt="" />
      <img src={Z9} alt="" />
      <img src={Z10} alt="" />
      <img src={Z11} alt="" />
      <img src={Z12} alt="" />
     </Marquee>
      </div>
  );
};

export default Home;
