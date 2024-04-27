import { createContext } from 'react';

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const THEME_LOCAL_STORAGE_KEY = "theme";
export const DEFAULT_THEME = Theme.LIGHT;
export const THEME_VALUES: string[] = Object.values(Theme);

const DEFAULT_VALUE: ThemeContextData = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);