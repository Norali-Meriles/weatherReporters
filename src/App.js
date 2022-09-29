import React from 'react';
import HomePage from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { ThemeProvider } from './providers/ThemeProvider';
import Theme from './components/Theme/Theme';

function App() {
  return (

    <ThemeProvider>
       <HomePage />
        <Theme/>
      </div>

  );
}

export default App;
