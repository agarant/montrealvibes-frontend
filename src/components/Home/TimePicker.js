import React, { Component } from 'react';
import styled from 'styled-components';
var Select = require('react-select');
import './Home.css';


const Container = styled.div`
  display: flex;
`;

export default class TimePicker extends Component {
  render() {
    return (
      <div>
        <p>It's very cool</p>
        <Container>
          <Select
            value={this.props.day}
            autosize={true}
            clearable={false}
            options={this.props.days}
            onChange={this.props.selectDay}
          />
          <Select
            value={this.props.moment}
            autosize={true}
            clearable={false}
            options={this.props.moments}
            onChange={this.props.selectMoment}
          />
        </Container>
        <p>And my mood is ...</p>
      </div>
    )
  }
}