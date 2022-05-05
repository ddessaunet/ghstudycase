import React from 'react';
import logo from 'assets/gh.png';
import './styles.css';

const ErrorPlaceholder = ({ children }: any) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ErrorPlaceholder;
