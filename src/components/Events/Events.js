import React, { Component } from 'react';
import EventCards from './EventCards';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 40px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

export default class Events extends Component {
  render() {
    return (
      <StyledDiv>
        <EventCards {...this.props}/>
      </StyledDiv>
    );
  }
}
