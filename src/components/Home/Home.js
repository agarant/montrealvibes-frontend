import React, { Component } from 'react';
import TimePicker from './TimePicker';
import Moods from './Moods';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 40px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

const Separator = styled.div`
  height: 30px;
`;

export default class Home extends Component {
  render() {
    return (
      <StyledDiv>
        <TimePicker {...this.props}/>
        <Separator/>
        <Moods {...this.props}/>
      </StyledDiv>
    );
  }
}
