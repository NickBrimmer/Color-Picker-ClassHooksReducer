import React from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { useColorPicker } from '../../hooks/color';


const ColorPicker = () => {
  const { color, backgroundColor, text } = useColorPicker();
  return (
    <>
      <Controls
        color={color}
        backgroundColor={backgroundColor}
        text={text}
      // onChange={}
      />
      <Display
        color={color}
        backgroundColor={backgroundColor}
        text={text}
      />
    </>
  );
}

export default ColorPicker;