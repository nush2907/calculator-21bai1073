// Display.js
import React from 'react';
import './Display.css';

function Display({ display, result }) {
  return (
    <div className="display-screen">
      {result || display || '0'}
    </div>
  );
}

export default Display;
