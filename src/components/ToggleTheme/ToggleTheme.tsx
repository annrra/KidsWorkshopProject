"use client";
import classNames from 'classnames';
import React, { FC } from 'react';
import { Theme } from '@/src/context/ThemeContext/ThemeContext';
import { useThemeContext } from '@/src/context/ThemeContext/ThemeProvider';
import styles from './toggle.module.css';

const ToggleTheme: FC = () => {
  const { toggleTheme, theme } = useThemeContext();
  const isLightTheme = theme === Theme.LIGHT;

  return (
    <div
      onClick={toggleTheme}
      className={classNames("switch", { "switch--light": isLightTheme })}
      data-toggle="toggle"
    >
      <div className={styles.switch} data-mode={isLightTheme ? 'nox' : 'lumos'}>
				{isLightTheme ? (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
            <path d="M8.96 4.893a8.862 8.862 0 0 0 2.528 7.404 8.862 8.862 0 0 0 7.404 2.528 7.565 7.565 0 0 1-2.313 2.922 7.466 7.466 0 0 1-4.553 1.538 7.498 7.498 0 0 1-5.322-2.205A7.498 7.498 0 0 1 4.5 11.758c0-1.715.573-3.29 1.538-4.553a7.563 7.563 0 0 1 2.921-2.312Zm1.694-.826c.158-.58-.29-1.193-.871-1.044a9.048 9.048 0 0 0-4.937 3.272A8.967 8.967 0 0 0 3 11.757c0 2.493 1.01 4.75 2.644 6.383a8.998 8.998 0 0 0 6.382 2.644 8.966 8.966 0 0 0 5.464-1.846 9.051 9.051 0 0 0 3.272-4.937c.149-.582-.465-1.03-1.044-.872a7.364 7.364 0 0 1-1.948.27 7.362 7.362 0 0 1-5.222-2.164 7.362 7.362 0 0 1-2.163-5.222c0-.675.1-1.326.269-1.947Z" />
          </svg>
				) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
            <path d="M11.75 2a.75.75 0 0 0-.75.75v2.455a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-.75-.75Zm0 7.16a2.591 2.591 0 1 1 0 5.181 2.591 2.591 0 0 1 0-5.182Zm0-1.5a4.091 4.091 0 1 0 0 8.181 4.091 4.091 0 0 0 0-8.182Zm6.026-.876a.75.75 0 1 0-1.06-1.06l-.868.868a.75.75 0 1 0 1.06 1.06l.868-.868Zm-1.928 9.064a.75.75 0 0 0 0 1.06l.868.868a.75.75 0 0 0 1.06-1.06l-.868-.868a.75.75 0 0 0-1.06 0Zm-8.196 1.06a.75.75 0 0 0-1.06-1.06l-.868.868a.75.75 0 0 0 1.06 1.06l.868-.868ZM5.724 5.724a.75.75 0 0 0 0 1.06l.868.868a.75.75 0 0 0 1.06-1.06l-.868-.868a.75.75 0 0 0-1.06 0ZM18.296 11h2.454a.75.75 0 0 1 0 1.5h-2.454a.75.75 0 0 1 0-1.5Zm-6.546 6.545a.75.75 0 0 0-.75.75v2.455a.75.75 0 0 0 1.5 0v-2.455a.75.75 0 0 0-.75-.75ZM2.75 11a.75.75 0 0 0 0 1.5h2.455a.75.75 0 0 0 0-1.5H2.75Z" />
          </svg>
				)}
      </div>
    </div>
  );
};

export default ToggleTheme;