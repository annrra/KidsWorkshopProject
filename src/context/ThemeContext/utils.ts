import {
  DEFAULT_THEME,
  THEME_LOCAL_STORAGE_KEY,
  THEME_VALUES,
  Theme,
} from './ThemeContext';

const isValidTheme = (value: string): value is Theme =>
  THEME_VALUES.includes(value);

const getThemeFromLocalStorage = (): Theme => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (themeValue && isValidTheme(themeValue)) return themeValue;

  return DEFAULT_THEME;
};

export { getThemeFromLocalStorage, isValidTheme };