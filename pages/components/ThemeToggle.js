import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? (
            <ion-icon name="moon" className="theme-icon"></ion-icon>
          ) : (
            <ion-icon name="sunny" className="theme-icon"></ion-icon>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 