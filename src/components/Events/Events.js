import React, { Component } from 'react';
import EventCards from './EventCards';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

const StyledDiv = styled.div`
  margin-top: 40px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

const TopLayer = styled.div`
  margin-left: 10px;
  height: 50px;
`;

function handleClick(){
  browserHistory.push('/');
}

export default class Events extends Component {
  constructor(props) {
    super(props);

    if (this.props.events.length < 1) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <StyledDiv>
        <TopLayer className="clickable" onClick={handleClick}>
          <img className="icon icons8-Long-Arrow-Left-Filled" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABSklEQVRoQ+2XsQ3CQAxFfSnokGADWCASDazBCLABFFBDDUU2gHWgzASwQVIjYZQAEZCEECtW4sNXRrHv3v++O58BS4axhAMUpGlOqiPqCJMCWlpMwpLTqiNk6ZgC1REmYclpSzmyPPjjK8Aums0YmG+G7p48c8WBP4Msjv4E0MQQ0UDAYDtyuxWvh5zuJ5BPiAdKuBm5HfLMFQcWgmRDRLWFUzGlJQUi3rN5DkuCyAWRBpEJIhEiBSIV4g1EMkQCkgtR8VnPkg7xBA6sjWiIly7DChAADON7RLIriHA2Dq6SC9GKzf7chJJhUi2KVJjMXksijN1No8Q98x8Pq2/OiHyzZ1+aGF5a7Z436AcsPVTJpIWl9ZrvfpqBF38zMBPzZi8pSq2/l3Kk1pUWTK4gTXNHHVFHmBTQ0mISlpxWHSFLxxSojjAJS057A0i0qxO9tD+EAAAAAElFTkSuQmCC" width="50" height="50"/>
        </TopLayer>
        <EventCards {...this.props}/>
      </StyledDiv>
    );
  }
}
