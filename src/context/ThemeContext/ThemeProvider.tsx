"use client";
import React, { FC, useContext, useEffect, useState } from 'react';
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from './ThemeContext';
import { getThemeFromLocalStorage } from './utils';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () =>
    setTheme((oldTheme) =>
      oldTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {mounted && <div className={theme}>{children}</div>}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

export { ThemeContextProvider, useThemeContext };