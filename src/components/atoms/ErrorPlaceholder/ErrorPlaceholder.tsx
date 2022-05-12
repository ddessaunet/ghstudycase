import React from 'react';
import logo from 'assets/gh.png';
import './styles.css';
import { Props } from './ErrorPlaceholder.d';

export const ErrorPlaceholder = ({ children }: Props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{children}</p>
      </div>
    </div>
  );
};
