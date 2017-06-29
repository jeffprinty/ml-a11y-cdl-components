import React from 'react';
import { node, object } from 'prop-types';
import styled from 'styled-components';
import media from './mediaQueries';

const SidebarAside = styled.aside`
  position: fixed;
  align-self: flex-start;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  height: 100%;
  padding: 20px;
  background: #ffffff;
  flex: 1;
  transition:all .3s cubic-bezier(0,.8,.4,1);
  h2 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
  }
`;

const Sidebar = ({ children, style }) => (
  <SidebarAside style={ style } role="complementary">
    { children }
  </SidebarAside>
);
Sidebar.defaultProps = {
  style: {}
};
Sidebar.propTypes = {
  children: node.isRequired,
  style: object
};

export default Sidebar;
