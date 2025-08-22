import React from 'react';

export const Label = ({ children, ...props }) => {
  return <label className="block mb-1 font-semibold" {...props}>{children}</label>;
};