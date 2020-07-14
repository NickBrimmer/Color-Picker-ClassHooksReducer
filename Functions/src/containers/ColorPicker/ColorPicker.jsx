import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import Controls from '../../components/Controls/Controls';

export default function ColorPicker() {
  const [color, setColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const [text, setText] = useState('My really awesome text')

  return (
    <>
      <Controls
        color={color}
        backgroundColor={backgroundColor}
        text={text}
        onChange={}
      />
      <Display
        color={}
        backgroundColor={}
        text={}
      />
    </>
  )
}