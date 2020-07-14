import React, { Component } from 'react';
import Controls from '../../components/Controls/Controls';
import Display from '../../components/Display/Display';

export default class ColorPicker extends Component {


  render() {
    return (
      <>
        <Controls />
        <Display />
      </>
    )
  }
}