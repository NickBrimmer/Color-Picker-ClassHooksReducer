import React from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { useColorPicker } from '../../hooks/color';


export default function ColorPicker() {

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
