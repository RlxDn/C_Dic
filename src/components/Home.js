import React, { Component } from 'react';
import styled from 'styled-components';

const Titlea = styled.span`
  position: relative;
  color: #92a8d1;
  font-family: 'Do Hyeon', sans-serif;
  font-size: 7vh;
  justify-content: center;
  left: 140px;
  top: 30px;
`;

const Titleb = styled.div`
  position: relative;
  font-family: 'Do Hyeon', sans-serif;
  font-size: 25vh;
  color: #60f8ff;
  border: 10px, solid, #ffffff;
  justify-content: center;
  text-align: center;
  padding-bottom: 400px;
`;

const Suba = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 10vh;
  justify-content: center;
  text-align: center;
`;

// const Txt=styled.div`
//   font-family: 'Do Hyeon', sans-serif;
// `;
class Home extends Component {
  render() {
    return (
      <>
        <Titlea>전 세계를 위한 사전,</Titlea>
        <Titleb>문화사전</Titleb>
        <Suba>All curtures in Korea</Suba>
      </>
    );
  }
}

export default Home;
