import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CustomThemeProvider from './Components/ThemeContext.jsx';  // import your provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>,
);
