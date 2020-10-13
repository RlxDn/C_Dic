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
class School extends Component {
  render() {
    return (
      <>
        <Cover>At School</Cover>
        <TxtB>What Korean kids do in recess?</TxtB>
        <TxtM>small recess(usually 10 minutes)</TxtM>
        <TxtS>Hide and Seek</TxtS>
        <TxtM>large recess(usually 1 hour)</TxtM>
        <TxtS>Soccer</TxtS>
        <TxtS>Basketball</TxtS>
        <TxtS></TxtS>
      </>
    );
  }
}
export default School;
