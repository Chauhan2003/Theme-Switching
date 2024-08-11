import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(false);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
