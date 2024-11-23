import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import './Header.css';

const Header = () => (
  

      <div class="header">
      <div class="header-title">
          <h1>Financial Analysis</h1>
          <p>Real-time market insights and analysis</p>
      </div>
      <div class="header-controls">
          <div class="search-container">
          <input
                    type="text"
                    className="search-input"
                    placeholder="Search companies..."
                />
                <button className="search-btn">
                    <SearchIcon className="icon" />
                </button>
          </div>
      </div>
      </div>



);

export default Header;
