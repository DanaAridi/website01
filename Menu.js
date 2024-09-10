import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul className='list'>
        <li><a href="#work" onClick={onClose}>Work</a></li>
        <li><a href="#services" onClick={onClose}>Services</a></li>
        <li><a href="#about-us" onClick={onClose}>About Us</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
      <div
        id="invertedcursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      ></div>
    </div>
  );
};

export default Menu;
