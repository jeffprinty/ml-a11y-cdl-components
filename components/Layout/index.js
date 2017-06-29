import styled from 'styled-components';
import media from './mediaQueries';

export { default as Sidebar } from './Sidebar.jsx';
export { default as Layout } from './Layout.jsx';
export { default as Header } from './Header.jsx';
export const Page = styled.div`
  width: 100%;  
  margin: 10px auto;
  padding: 40px;  
  box-sizing: border-box;
  height: auto;
  min-height: 160px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  ${media.sm`
    max-width: 1032px;
  `}
  ${media.md`
    max-width: 1032px;
  `}
  ${media.lg`
    max-width: 1032px;
  `}
  p {
    margin-bottom: 20px;
  }
`;
