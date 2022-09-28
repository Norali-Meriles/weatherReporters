import React from 'react';
import logo from '../../logo.svg';

import { useTheme } from '../../providers/ThemeProvider';

const Theme = () => {
  const { theme, toggleTheme, themeName } = useTheme();
  return (
    <div>
      <nav className="App-main" style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
         </div>
         <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={toggleTheme} />
        </div>
      </nav>
      <main className="App-main" style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current Theme is `{themeName}`</p>
        <button onClick={toggleTheme}>Change Theme</button>
      </main>
    </div>
  );
};

export default Theme;
