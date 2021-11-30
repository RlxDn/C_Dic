import React, { Component } from 'react';
import './styles/Auction.css';
import cafeterrace from './images/cafeterrace.jpg';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  body {
    background: #ffe8d6;
  }
`;

class Auction extends Component {
  render() {
    return (
      <>
      <GlobalStyle/>
        <div class="container">
          <div class="img_con">
            <img class="pnt" src={cafeterrace} />
            <div style={{margin: "20px 0px 20px 0px", fontSize: "20px"}}>Want more?</div>
            <div class="btn">
              <div style={{fontSize: "24px"}}>Vincent Van Gogh</div>
              <div style={{fontSize: "13px"}}>Exhibition only</div>
            </div>
          </div>
          <span class="content">
            <div class="top_con">
              <div class="left_col">
                <div>Auction Starts at</div>
                <div>$10,000</div>
                <div>Current Price</div>
                <div>$150,000</div>
              </div>
              <div class="right_col">
                <div>Warrent Buffett $100,000</div>
                <div>Bill Gates $120,000</div>
                <div>Warrent Buffett $150,000</div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="bot_con">
              <div style={{fontSize: "30px"}}>Want to get it?</div>
              <div class="bid">
                <div>BID</div>
                <input style={{width: "900px"}}/>
                <div class="sml_btn">ACCEPT</div>
              </div>
              <div style={{fontSize: "24px"}}>Finishes at 2021.07.30</div>
              <div>Arts by Vincent Van Gogh</div>
              <div>
                <img class="sml_pnt" src={cafeterrace}/>
              </div>
            </div>
          </span>
        </div>
      </>
    );
  }
}
export default Auction;
