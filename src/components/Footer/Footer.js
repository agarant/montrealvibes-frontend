import React, { Component } from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center:
  height: 40px;
`;


class Footer extends Component {
  render() {
    return (
      <StyledDiv>
        <p> Made with ♥ in Montreal - <a href="https://icons8.com">Icon pack by Icons8</a></p>
      </StyledDiv>
    );
  }
}

export default Footer;



