import React, { useState, useEffect } from 'react';
import './HomePage.css';
import LaptopImage from '../../assets/laptopImage.webp';
import LogoImage from '../../assets/logoImage.jpeg';
import Menu from '../Menu/Menu'; // Import the Menu component

function HomePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`HomePage ${menuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        <button className="menu-btn" onClick={toggleMenu}>Menu</button>
        <p className="weAre">We are</p>
      </header>
      <main className="main">
        <div className="content">
          <h1 className="title">The Web Addicts</h1>
          <p className="description">
            We are a team of creative designers and developers building high quality websites, mobile apps & e-commerce
          </p>
          <button className="gtkuBtn">
            GET TO KNOW US
          </button>
        </div>
        <img src={LaptopImage} alt="laptop" className="laptopImage" />
        <img src={LogoImage} alt="logo" className="logoImage" />
      </main>
      <div
        id="invertedcursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      ></div>
      <Menu isOpen={menuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default HomePage;
