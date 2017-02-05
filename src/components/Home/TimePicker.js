import React, { Component } from 'react';
import styled from 'styled-components';
var Select = require('react-select');
import './Home.css';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SelectBox = styled.div`
  display: flex;
`;

const FlexGrow = styled.div`
  flex-grow: 1;
`;

export default class TimePicker extends Component {
  render() {
    return (
      <Container>
        <div>
          <FlexGrow>
            <p>It's</p>
          </FlexGrow>
          <SelectBox>
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
          </SelectBox>
        </div>
      </Container>
    )
  }
}