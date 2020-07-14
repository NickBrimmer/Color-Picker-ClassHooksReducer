import { useState } from 'react';

export const useColorPicker = () => {
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('FFFFFF');
  const [text, setText] = useState('My awesome text!')

  return { color, backgroundColor, text };
}