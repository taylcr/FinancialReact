import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header">
      <div className="header-title">
        <h1>Financial Analysis</h1>
        <p>Real-time market insights and analysis</p>
      </div>
      <div className="header-controls">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search companies..." />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
export default Header;
