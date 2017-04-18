import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import Column from '../../../components/Layout/Column';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  
`;

const Root = () => (
  <Container>
    <Column md={ 2 }>
      <Title>
        ml-a11y-cdl-components
      </Title>
    </Column>
    <Column md={ 10 }>
      <Button title="alert" onClick={ () => {} } />
    </Column>
  </Container>
);

export default Root;
