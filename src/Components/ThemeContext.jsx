// ThemeContext.jsx
import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const ThemeToggleContext = createContext();

export const useThemeToggle = () => useContext(ThemeToggleContext);

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: { main: '#3f51b5' },
      },
    }), [mode]);

  return (
    <ThemeToggleContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
