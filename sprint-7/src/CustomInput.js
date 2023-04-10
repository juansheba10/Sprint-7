import React from 'react';

const CustomInput = ({ value, onChange }) => {
  const increment = () => {
    onChange(+value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      onChange(+value - 1);
    }
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        style={{ width: '50px', textAlign: 'center' }}
      />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CustomInput;
