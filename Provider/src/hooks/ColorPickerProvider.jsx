import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorPickerProvider = ({ children }) => {
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [text, setText] = setText('My wonderful text!');

  return (
    <ColorContext.Provider value={{ color, backgroundColor, text }} >
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {
  const { color } = useContext(ColorContext);
  return color;
}

export const useBackgroundColor = () => {
  const { backgroundColor } = useContext(ColorContext);
  return backgroundColor;
}

export const useText = () => {
  const { text } = useContext(ColorContext);
  return text;
}
