import React, { Component } from 'react';
import styled from 'styled-components';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import EventCard from '../Events/EventCard.js';
//import Moods from './Events';
import {browserHistory} from 'react-router';

const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 90vh;
  padding: 20px;
`;

const MapWrapper = styled.div`
  width: 600px;
`;

const RightWrapper = styled.div`
  flex-gow: 1;
  overflow-y: scroll;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RouteWrapper = styled.div`
  display: flex;
`;

const NumberCircle = styled.div`
  border-radius: 50%;
  behavior: url(PIE.htc);

  width: 14px;
  height: 14px;
  padding: 3px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 12px Arial, sans-serif;
`;

function handleClick(){
  browserHistory.push('/events');
}

const TopLayer = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  height: 50px;
`;

const Event = (value, index, selectEvent) => (
  <RouteWrapper>
    <NumberCircle>
      {index + 1}
    </NumberCircle>
    {EventCard(value, selectEvent)}
  </RouteWrapper>
);

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 45.493882, lng: -73.564922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export default class EventsRoute extends Component {
  constructor(props) {
    super(props);

    if (this.props.events.length < 1) {
      browserHistory.push('/');
    }

    const markers = this.props.events.map((a,i) => ({
      position: {
        lat: a.lat,
        lng: a.long,
      },
      defaultAnimation: 2,
      icon: `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue${i+1}.png`,
    }));
    console.log(markers);
    this.state = {
      markers,
    };

  }

  // Then, render it:
  render() {
    return (
      <div>
        <TopLayer className="clickable" onClick={handleClick}>
          <img className="icon icons8-Long-Arrow-Left-Filled" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABSklEQVRoQ+2XsQ3CQAxFfSnokGADWCASDazBCLABFFBDDUU2gHWgzASwQVIjYZQAEZCEECtW4sNXRrHv3v++O58BS4axhAMUpGlOqiPqCJMCWlpMwpLTqiNk6ZgC1REmYclpSzmyPPjjK8Aums0YmG+G7p48c8WBP4Msjv4E0MQQ0UDAYDtyuxWvh5zuJ5BPiAdKuBm5HfLMFQcWgmRDRLWFUzGlJQUi3rN5DkuCyAWRBpEJIhEiBSIV4g1EMkQCkgtR8VnPkg7xBA6sjWiIly7DChAADON7RLIriHA2Dq6SC9GKzf7chJJhUi2KVJjMXksijN1No8Q98x8Pq2/OiHyzZ1+aGF5a7Z436AcsPVTJpIWl9ZrvfpqBF38zMBPzZi8pSq2/l3Kk1pUWTK4gTXNHHVFHmBTQ0mISlpxWHSFLxxSojjAJS057A0i0qxO9tD+EAAAAAElFTkSuQmCC" width="50" height="50"/>
        </TopLayer>
        <MapContainer>
          <MapWrapper>
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              markers={this.state.markers}
            />
          </MapWrapper>
          <RightWrapper>
            <RouteContainer>
              {this.props.events.map((a,i) => Event(a, i, this.props.selectEvent))}
            </RouteContainer>
          </RightWrapper>
        </MapContainer>
      </div>
    )
  }
}
