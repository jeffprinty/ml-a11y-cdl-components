/* eslint global-require: 0 */
import React, { ReactDOM } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Playground from './Playground';

import { Button, Column, Alert } from '../../../components';
import { ButtonUsage, ButtonExample, ButtonWithIconExample, AlertExample } from '../../../docs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  
`;

const Root = () => (
  <Container>
    <Column sm={ 12 } md={ 3 } lg={ 3 }>
      <Title>
        ml-a11y-cdl-components
      </Title>
    </Column>
    <Column sm={ 12 } md={ 9 } lg={ 9 }>
      <h2>Alert</h2>
      <div>
        <Alert alertType="alert" content={ <div>Text within a div passed as a prop <a href="/">link</a></div> } /><br />
        <Alert alertType="warning" content="Plain old text" /><br />
        <Alert alertType="error" content={ <div>Error text <a href="/">link</a></div> } /><br />
        <Alert alertType="success" content={ <div>Success text <a href="/">link</a></div> } /><br />
      </div>
      <Playground
        className="playground"
        codeText={ AlertExample }
        scope={{ React, ReactDOM, Alert }}
      />
      <ReactMarkdown source={ ButtonUsage } />
      <h2>Button</h2>
      <Playground
        className="playground"
        codeText={ ButtonExample }
        scope={{ React, ReactDOM, Button }}
      />
      <h2>Button with Icon</h2>
      <Playground
        className="playground"
        codeText={ ButtonWithIconExample }
        scope={{ React, ReactDOM, Button }}
      />
    </Column>
  </Container>
);

export default Root;
