import React from 'react';

import { useTheme } from '../../providers/ThemeProvider';

import './style.css';

const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='my-3'>
      <nav style={{ backgroundColor: theme.background, color: theme.textColor }}>
         <div className="container form-check form-switch d-flex justify-content-end">
         <label className="switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={toggleTheme} />
          <span className="slider"></span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Theme;
