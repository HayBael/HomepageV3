import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const darkTheme = {
  background: '#2F8EFC',
  color: '#ffffff',
};

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s, color 0.3s;
  }
`;

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledWrapper>
        <label className="plane-switch">
          <input type="checkbox" checked={!isDarkMode} onChange={toggleTheme} />
          <div>
            <div>
              <svg viewBox="0 0 13 13">
                <path d="M1.55989957,5.41666667 L5.51582215,5.41666667..." fill="currentColor" />
              </svg>
            </div>
            <span className="street-middle" />
            <span className="cloud" />
            <span className="cloud two" />
          </div>
        </label>
      </StyledWrapper>
    </ThemeProvider>
  );
};

const StyledWrapper = styled.div`
  .plane-switch {
    cursor: pointer;
  }
  .plane-switch input {
    display: none;
  }
  .plane-switch input + div {
    background: ${(props) => (props.theme.background === '#2F8EFC' ? 'linear-gradient(90deg, #6B6D76 0%, #60A7FA 100%)' : 'linear-gradient(90deg, #fff 0%, #ddd 100%)')};
  }
`;

export default Switch;
