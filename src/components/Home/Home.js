import React, { Component } from 'react';
import TimePicker from './TimePicker';
import Moods from './Moods';

export default class Home extends Component {
  render() {
    return (
      <div>
        <TimePicker {...this.props}/>
        <Moods {...this.props}/>
      </div>
    );
  }
}
