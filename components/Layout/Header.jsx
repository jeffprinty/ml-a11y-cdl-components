import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

const HeaderDiv = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 64px;
  background: #142A35;
  z-index: 100;
  h1 {
    font-size: 1.2em;
    font-weight: 400;
    color: #ffffff;
    line-height: 1.3;
  }
`;
const TitleText = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;


const Header = ({ title, children }) => {
  if (children) {
    console.log('there are children');
  }
  return (
    <HeaderDiv aria-labelledby="headerTitle" role="banner">
      <TitleText>
        <h1 id="headerTitle">{ title }</h1>
      </TitleText>
    </HeaderDiv>
  );
};
Header.defaultProps = {
  title: '',
  children: null
};
Header.propTypes = {
  title: string,
  children: node
};
export default Header;
