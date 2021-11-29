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
// const TxtB=styled.div`
//  font-family: 'Do Hyeon', sans-serif;
//  font-size: 10vh;
// `;
const TxtM=styled.div`
 font-family: 'Do Hyeon', sans-serif;
 font-size: 7vh;
`;
const TxtS=styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 5vh;
  text-align: right;
`;
class Contact extends Component {
  render() {
    return (
    <>
        <Cover>Korean Food</Cover>
        <TxtM>Tradition food</TxtM>
        <TxtS>TTeok</TxtS>
    </>
    )
  }
}

export default Contact;