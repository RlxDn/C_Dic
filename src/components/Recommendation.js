import React, { Component } from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import './styles/Recommend.css';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  body {
    background: #ddbea9;
    overflow-x: hidden;
  }
`;

class Recommendation extends Component {
  render() {
    return (
      <>
      <GlobalStyle/>
        <div class="row">
          <div class="column">
            <img src={img1} />
            <img src={img3} />
            <img src={img10} />
            <img src={img9} />
            <img src={img7} />
            <img src={img5} />
          </div>
          <div class="column">
            <img src={img12} />
            <img src={img2} />
            <img src={img4} />
            <img src={img8} />
            <img src={img9} />
            <img src={img6} />
          </div>
          <div class="column">
            <img src={img7} />
            <img src={img11} />
            <img src={img8} />
            <img src={img2} />
            <img src={img5} />
            <img src={img10} />
          </div>
          <div class="column">
            <img src={img11} />
            <img src={img4} />
            <img src={img6} />
            <img src={img9} />
            <img src={img3} />
            <img src={img7} />
          </div>
        </div>
      </>
    );
  }
}
export default Recommendation;
