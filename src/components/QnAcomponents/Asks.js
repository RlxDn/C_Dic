import React, {Component} from 'react';
import styled from 'styled-components';

const Remove=styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;   
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    background: #22b8cf;
    border-radius: 3px;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;
    transition: 0.15s;
    &:hover {
        background: #3bc9db;
    }
`;
const Qitem=styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
    &:hover {
        background: #e3fafc;
        ${Remove}{
            opacity: 1;
        }
    }
`;

const Q=styled.div`
    flex: 1;
    word-break: break-all;
`;

class Asks extends Component {
    render() {
        const {q, id, onRemove} = this.props;
        return (
            <Qitem>
                <Remove onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>삭제</Remove>
                    <Q>{q}</Q>
            </Qitem>
        );
    }
}
export default Asks;