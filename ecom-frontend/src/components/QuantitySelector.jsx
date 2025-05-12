// src/components/QuantitySelector.jsx
import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease, onChange, min = 1, max = 99 }) => {
  const selectorStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '20px', // Pill shape for the container
    width: 'fit-content',
  };

  const buttonStyle = {
    backgroundColor: '#f7f7f7',
    border: 'none',
    // borderRight: '1px solid #ccc', // For left button
    // borderLeft: '1px solid #ccc', // For right button
    padding: '8px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.2',
  };

  const leftButtonStyle = {
    ...buttonStyle,
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderRight: '1px solid #ccc',
  }

  const rightButtonStyle = {
    ...buttonStyle,
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    borderLeft: '1px solid #ccc',
  }

  const inputStyle = {
    width: '40px',
    textAlign: 'center',
    border: 'none',
    fontSize: '1rem',
    padding: '8px 0',
    // Remove spinners for number input
    appearance: 'textfield', // For Firefox
    MozAppearance: 'textfield', // For Firefox
    WebkitAppearance: 'none', // For Chrome, Safari, Edge
    margin: 0, // Remove default margin for webkit
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    onChange(value);
  };

  return (
    <div style={selectorStyle}>
      <button onClick={onDecrease} disabled={quantity <= min} style={leftButtonStyle}>
        −
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        style={inputStyle}
      />
      <button onClick={onIncrease} disabled={quantity >= max} style={rightButtonStyle}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;