import React, { createContext } from 'react';

const ColorContext = createContext();

export const ColorPickerProvider = ({ children }) => {


  return (
    <ColorContext.Provider value={} >
      {children}
    </ColorContext.Provider>
  )
}