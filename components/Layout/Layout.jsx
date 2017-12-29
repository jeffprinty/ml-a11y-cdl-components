import React from 'react';
import { oneOfType, array, string, bool } from 'prop-types';
import styled from 'styled-components';
// import media from './mediaQueries';


const ContainerWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  transition:all .3s cubic-bezier(0,.8,.4,1);
  background-color: #f3f3f3;
  overflow: hidden;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  position: absolute;
  top: 65px;
  width: 100%;
  height: calc(100% - 64px);
  overflow-x: hidden;
  overflow-y: scroll;

  > main {
    padding: 20px;
    margin: ${p => p.align === 'left' ? '0 0 0 300px' : '0 300px 0 0'};
  }

  > aside {
    left: ${p => p.align === 'left' ? '0' : 'auto'};
    right: ${p => p.align === 'right' ? '0' : 'auto'};
  }
`;

const Layout = ({ children, sidebar }) => {
  console.log('sidebar', sidebar);
  const [ headerChild, sidebarChild, ...contents ] = children;
  return (
    <ContainerWrap>
      { headerChild }
      <ContentWrap align={ sidebar }>
        { sidebar === 'left' && sidebarChild }
        <main role="main">
          { contents }
        </main>
        { sidebar === 'right' && sidebarChild }
      </ContentWrap>
    </ContainerWrap>
  );
};


Layout.defaultProps = {
  sidebar: 'left'
};
Layout.propTypes = {
  children: array.isRequired,
  sidebar: oneOfType([ string, bool ])

};

export default Layout;
