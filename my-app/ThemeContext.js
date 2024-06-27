import React, { createContext, useContext, useState } from 'react';


const defaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#fff',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 32,
  },
  typography: {
    headerFontSize: '24px',
    bodyFontSize: '16px',
  },

}

const darkTheme = {
    colors: {
      primary: '#212529',
      secondary: '#343a40',
      background: '#343a40',
      text: '#f8f9fa',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 32,
    },
    typography: {
      headerFontSize: '24px',
      bodyFontSize: '16px',
    },
  };
  

 const ThemeContext = createContext(defaultTheme);


function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme);
    }
    
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
    return useContext(ThemeContext);
  }
  
  export { ThemeProvider, useTheme };

  
