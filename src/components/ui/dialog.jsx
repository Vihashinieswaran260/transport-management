import React from 'react';

export const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <button className="float-right text-gray-500" onClick={onClose}>×</button>
        <div>{children}</div>
      </div>
    </div>
  );
};