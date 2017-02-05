import React, { Component } from 'react';
import styled from 'styled-components';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import Moods from './Events';

const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MapWrapper = styled.div`
  padding: 20px;
  flex-gow: 1;
  width: 500px;
  height: 600px;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RouteWrapper = styled.div`
  padding: 20px;
  flex-gow: 1;
  width: 500px;
  height: 100px;
`;

const NumberCircle = styled.div`
  border-radius: 50%;
  behavior: url(PIE.htc);

  width: 36px;
  height: 36px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 32px Arial, sans-serif;
`;

const Event = (value) => (
  <RouteWrapper>
    TODO
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
  state = {
    markers: [{
      position: {
        lat: 45.0112183,
        lng: -73.52067570000001,
      },
      defaultAnimation: 2,
      icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue1.png'
    },
    {
      position: {
        lat: 45.1112183,
        lng: -73.52067570000001,
      },
      defaultAnimation: 2,
      icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue2.png'
    },
    {
      position: {
        lat: 46.0117183,
        lng: -73.59067570000001,
      },
      defaultAnimation: 2,
      icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue3.png'
    }
  ],
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
      this._mapComponent = map;
      if (map) {
        console.log(map.getZoom());
      }
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick(event) {
      const nextMarkers = [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ];
      this.setState({
        markers: nextMarkers,
      });

      if (nextMarkers.length === 3) {
        this.props.toast(
          `Right click on the marker to remove it`,
          `Also check the code!`
        );
      }
    }

    handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }



  // Then, render it:
  render() {
    return (
      <div>
        <MapContainer>
          <MapWrapper>
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              onMapLoad={this.handleMapLoad}
              onMapClick={this.handleMapClick}
              markers={this.state.markers}
              onMarkerRightClick={this.handleMarkerRightClick}
            />
          </MapWrapper>
          <MapWrapper>
            <RouteContainer>
              <RouteWrapper>
                <NumberCircle>
                  1
                </NumberCircle>
                <div>
                  EVENT HERE
                </div>
              </RouteWrapper>
              <RouteWrapper>
                <NumberCircle>
                  2
                </NumberCircle>
                <div>
                  EVENT HERE
                </div>
              </RouteWrapper>
              <RouteWrapper>
                <NumberCircle>
                  3
                </NumberCircle>
                <div>
                  EVENT HERE
                </div>
              </RouteWrapper>
            </RouteContainer>
          </MapWrapper>
        </MapContainer>
      </div>
    )
  }
}
