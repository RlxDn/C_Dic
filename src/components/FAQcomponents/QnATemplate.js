import React from 'react';
import styled from 'styled-components';

const Qtemplate=styled.main`
    background: white;
    width: 80%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    margin-top: 4rem;
`;
const Qwrapper=styled.div`
    padding: 1rem;
    border-bottom: 1px solid orange;
`;
const Qswrapper= styled.div`
    min-height: 5rem;
`;
const QnATemplate = ({form, children}) => {
    return (
        <Qtemplate>
            <Qwrapper>
                {form}
            </Qwrapper>
            <Qswrapper>
                {children}
            </Qswrapper>
        </Qtemplate>
    );
};

export default QnATemplate;