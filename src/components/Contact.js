import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import './styles/contact.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #a5a58d;
  } 
`;

class Contact extends Component {
  render() {
    return (
    <>
    <GlobalStyle/>
      <form class="gform" method="POST" action="" name="contactus">
        <fieldset>
            <legend>Contact Us</legend>
            <div class="formlist">
                <ul>
                    <li>
                        <label for="name">이름 <sup>*</sup></label>
                        <span class="inputbox"><input type="text" id="name" name="name" required
                          placeholder="이름을 입력하세요" /></span>
                    </li>
                    <li>
                      <label for="email">이메일 <sup>*</sup></label>
                      <span class="inputbox"><input type="text" id="email" name="email" required
                          placeholder="sample@email.com" /></span>
                  </li>
                  <li>
                      <label for="message">문의내용 <sup>*</sup></label>
                      <span class="textbox">
                              <textarea id="message" name="message" placeholder="내용을 입력하세요" ></textarea>
                      </span>
                  </li>
                </ul>
                <div class="bt_box">
                    <button type="submit" class="commbtn">문의하기</button>
                </div>
            </div>
        </fieldset>   
      </form>
    </>
    )
  }
}

export default Contact;