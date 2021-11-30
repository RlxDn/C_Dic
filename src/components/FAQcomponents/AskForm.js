import React from "react";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
`;
const Input = styled.input`
    flex: 1;
    font-size: 2rem;
    outline: none;
    border: none;
`;
const Create = styled.button`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 1rem;
    background: orange;
    border-radius: 3px;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: #FFB122;
    }
`;

const AskForm = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <Form>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <Create onClick={onCreate}>Ask</Create>
    </Form>
  );
};

export default AskForm;