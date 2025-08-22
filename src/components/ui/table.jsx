import React from 'react';

export const Table = ({ headers = [], rows = [] }) => {
  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx} className="border px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};