import React, { Component } from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 20vh;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  padding-bottom: 400px;
`;

const TxtB=styled.div`
 font-family: 'Do Hyeon', sans-serif;
 font-size: 10vh;
`;
const TxtM=styled.div`
 font-family: 'Do Hyeon', sans-serif;
 font-size: 7vh;
`;
const TxtS=styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 5vh;
  text-align: right;
`;
class Cafe extends Component {
  render() {
    return (
      <>
      <Cover>Restaurant</Cover>
      <TxtB>Etiquette</TxtB>
      <TxtM>During Meal</TxtM>
      <TxtS>Don't speak aloud</TxtS>
      <TxtS>Speak after swallow</TxtS>
      </>
    );
  }
}
export default Cafe;
