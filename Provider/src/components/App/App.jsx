import React from 'react';
import { ColorPickerProvider } from '../../hooks/ColorPickerProvider';
import ColorPicker from '../ColorPicker/ColorPicker';

export default function App() {
  return (
    <>
      <ColorPickerProvider>
        <ColorPicker />
      </ColorPickerProvider>
    </>
  );
}

