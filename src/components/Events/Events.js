import React, { Component } from 'react';
import EventCards from './EventCards';
import styled from 'styled-components';
import {browserhistory} from 'react-router';

const StyledDiv = styled.div`
  margin-top: 40px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

export default class Events extends Component {
  constructor(props) {
    super(props);

    if (this.props.events.length < 1) {
      browserhistory.push('/');
    }
  }

  render() {
    return (
      <StyledDiv>
        <EventCards {...this.props}/>
      </StyledDiv>
    );
  }
}
