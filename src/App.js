import React from 'react';
import './App.css';

import { ThemeProvider } from './providers/ThemeProvider';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Theme/>
      </div>
    </ThemeProvider>
  );
}

export default App;
