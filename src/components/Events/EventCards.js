import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

const EventsContainer = styled.div`
  display: flex;
  flex-flow: row wrap
  justify-content: space-around;
`;

export default class EventCards extends Component {
  render() {
    return (
      <EventsContainer>
        {this.props.events.map(a => EventCard(a, this.props.selectEvent))}
      </EventsContainer>
    );
  }
}