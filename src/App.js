import React from 'react';
import HomePage from './pages/HomePage';

import { ThemeProvider } from './providers/ThemeProvider';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <div>
    <ThemeProvider>
      <Theme />
        <HomePage />
    </ThemeProvider>
    </div>

  );
}

export default App;
