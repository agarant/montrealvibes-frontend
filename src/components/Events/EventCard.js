import React, { Component } from 'react';
import styled from 'styled-components';
import WhiteFrame from '../shared/WhiteFrame';

const EventWrapper = styled.div`
  margin: 10px;
  flex-gow: 1;
  width: 230px;
`;

const EventContent = styled.div`
  font-size: 18px;
  height: 260px;
  display: flex;
  flex-direction: column;
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
`;

const BottomCardContainer = styled.div`
  background-color: ${props => props.theme.palette.primary1Color};
  color: ${props => props.theme.palette.white};
  height: auto;
  padding: 10px;
`;

const TaglineContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  background-color: ${props => props.theme.palette.primary1Color};
  color: ${props => props.theme.palette.white};
  font-size: 20px;
`;


const routeImg = (<img className="icon icons8-GPS-Device-Filled" src="data:image/png;base64,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" width="75" height="75"/>);
const nullImg = (<img className="icon icons8-Empty-Set" src="data:image/png;base64,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" width="75" height="75"/>);

function formatImage(images) {
  const reference = images[0].photo_reference;
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${reference}&key=AIzaSyAtl3gTE92tNMEjhI-EfJYK5F-QbyN_7l4`
}
function retrieveImage(route, images) {
  if (route) {
    return routeImg;
  } else if (!images || images.length < 1) {
    return nullImg;
  } else {
    const val = formatImage(images);
    return (<img src={val}/>);
  }
}

class Img extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return retrieveImage(this.props.route, this.props.images);;
  }
}


export default (value, selectEvent) => (
  <EventWrapper>
    <WhiteFrame level={1} className='clickable'>
      <EventContent onClick={() => selectEvent(value.route, value.url)}>
        <PictureContainer >
          <Img route={value.route} images={value.images}/>
        </PictureContainer>
        <BottomCardContainer>
          <TitleContainer>
            {value.name}
          </TitleContainer>
          <TaglineContainer >
            {value.tagline}
          </TaglineContainer>
        </BottomCardContainer>
      </EventContent>
    </WhiteFrame>
  </EventWrapper>
);