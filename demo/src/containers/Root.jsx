import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import Column from '../../../components/Layout/Column';
import Alert from '../../../components/Alert/Alert';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  
`;
const clickButton = (e) => {
  console.log(e.target);
};

const Root = () => (
  <Container>
    <Column md={ 3 }>
      <Title>
        ml-a11y-cdl-components
      </Title>
    </Column>
    <Column md={ 9 }>
      <div>
        <Alert alertType="alert" text={ <div>Text within a div passed as a prop <a href="/">link</a></div> } /><br />
        <Alert alertType="warning" text="Plain old text" /><br />
        <Alert alertType="error" text={ <div>Error text <a href="/">link</a></div> } /><br />
        <Alert alertType="success" text={ <div>Success text <a href="/">link</a></div> } /><br />
      </div>
      <h2>Button</h2>
      <dl>
        <dt>Button</dt><dd><Button title="Button" onClick={ clickButton } /></dd>
        <dt>Disabled Button</dt><dd><Button title="Button" onClick={ clickButton } disabled /></dd>
        <dt>Primary</dt><dd><Button title="Button" onClick={ clickButton } primary /></dd>
        <dt>Disabled Primary</dt><dd><Button title="Button" onClick={ clickButton } primary disabled /></dd>
        <dt>Button with Icon</dt><dd><Button title="Button" icon="stop" onClick={ clickButton } /></dd>
        <dt>Disabled Button with Icon</dt><dd><Button title="Button" icon="stop" onClick={ clickButton } disabled /></dd>
        <dt>Primary Button with Icon</dt><dd><Button title="Button" icon="tools" onClick={ clickButton } primary /></dd>
        <dt>Disabled Primary Button with Icon</dt><dd><Button title="Button" icon="tools" onClick={ clickButton } primary disabled /></dd>
      </dl>
    </Column>
  </Container>
);

export default Root;
