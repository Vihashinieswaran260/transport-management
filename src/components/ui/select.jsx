import React from 'react';

export const Select = ({ options = [], ...props }) => {
  return (
    <select className="border rounded px-3 py-2 w-full" {...props}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};