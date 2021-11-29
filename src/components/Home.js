import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import cafeterrace from './images/cafeterrace.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8b600;
  }
`;

const Container = styled.div`
  margin-top: 150px;
`;

const Image = styled.div`
  background-image: url(${cafeterrace});
  background-repeat: no-repeat;
  background-size: 350px;
  width: 350px;
  height: 440px;

  align-items: center;
`;

const Pname = styled.div`
  font-size: 15px;
`;

const Pauthor = styled.div`
  font-size: 10px;
`;

const Iwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Titleb = styled.div`
  position: relative;
  font-family: 'Noto Sans Korean';
  font-size: 100px;
  color: white;

  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Titleb>HARMONY</Titleb>
            <Iwrapper>
              <Image />
              <Pname>Cafe Terrace at Night</Pname>
              <Pauthor>Vincent Van Gogh</Pauthor>
            </Iwrapper>
        </Container>
      </>
    );
  }
}

export default Home;
