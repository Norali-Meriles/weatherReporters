import React, { createContext, useState, useContext } from 'react';

const themeStyles = {
  dark: {
    background: '#282c34',
    textColor: 'white',
  },
  light: {
    background: 'white',
    textColor: '#282c34',
  },
};

const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

export const useTheme = () => useContext(ThemeContext);
