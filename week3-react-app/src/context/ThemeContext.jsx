import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}