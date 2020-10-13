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
const N1 = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 10vh;
`;
const FormWrapper = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 5vh;
`;
const Form = styled.div`
  text-align: right;
`;
class Land extends Component {
  render() {
    return (
      <>
        <Cover>LandMarks</Cover>
        <N1>Gyeongbokgung</N1>
        <FormWrapper>
          <Form>Location:</Form>
          <Form>Entrance fee:</Form>
          <Form>Closed days:</Form>
        </FormWrapper>
        <N1>Namsan</N1>
      </>
    );
  }
}

export default Land;
