import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import Controls from '../../components/Controls/Controls';

export default function ColorPicker() {


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