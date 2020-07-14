import React, { Component } from 'react';
import Controls from '../../components/Controls/Controls';
import Display from '../../components/Display/Display';

export default class ColorPicker extends Component {
  state = {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    text: 'My Very Interesting App'
  }

  render() {
    const { color, backgroundColor, text } = this.state;
    return (
      <>
        <Controls
          color={color}
          backgroundColor={backgroundColor}
          text={text}
        />
        <Display
          color={color}
          backgroundColor={backgroundColor}
          text={text}
        />
      </>
    )
  }
}