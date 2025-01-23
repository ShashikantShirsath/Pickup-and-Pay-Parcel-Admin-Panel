import React, { useState } from 'react';
import './SettingsPanel.css';
import Sidebar from '../Header/Header';

function SettingsPanel() {
  const [sidenavColor, setSidenavColor] = useState('white');
  const [sidenavType, setSidenavType] = useState('white');
  // const [navbarFixed, setNavbarFixed] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleColorChange = (color) => {
    setSidenavColor(color);
    console.log(`Sidenav color changed to ${color}`);
  };

  const handleTypeChange = (type) => {
    setSidenavType(type);
    console.log(`Sidenav type changed to ${type}`);
  };

  // const toggleNavbarFixed = () => {
  //   setNavbarFixed(!navbarFixed);
  //   console.log(`Navbar fixed: ${!navbarFixed}`);
  // };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(`Theme switched to ${theme === 'light' ? 'dark' : 'light'}`);
  };

  return (
    <div className={`settings-container ${theme}`}>
      {/* Sidebar Component */}
      {/* <Sidebar sidenavColor={sidenavColor} sidenavType={sidenavType} /> */}

      <div className="settings-content">
        <h2>Material UI Configurator</h2>
        <p>See our dashboard options.</p>

        <div className="section">
          <h3>Sidenav Colors</h3>
          <div className="color-options">
            {['pink', 'black', 'blue', 'green', 'orange'].map((color) => (
              <button
                key={color}
                className={`color-button ${color}`}
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Sidenav Type</h3>
          <p>Choose between different sidenav types.</p>
          <div className="type-options">
            {['dark', 'transparent', 'white'].map((type) => (
              <button
                key={type}
                className={`type-button ${sidenavType === type ? 'active' : ''}`}
                onClick={() => handleTypeChange(type)}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="section">
          <h3>Navbar Fixed</h3>
          <label className="toggle-switch">
            <input type="checkbox" checked={navbarFixed} onChange={toggleNavbarFixed} />
            <span className="slider"></span>
          </label>
        </div> */}

        <div className="section">
          <h3>Light / Dark</h3>
          <label className="toggle-switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>

        <button className="view-docs-button">View Documentation</button>
      </div>
    </div>
  );
}

export default SettingsPanel;
