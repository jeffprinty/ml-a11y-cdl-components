import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrap = styled.div`
  height: auto;
  min-height: 160px; 
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;
const CardTitle = styled.div`
  padding: 18px 23px; 
  position: relative;
  display: flex;
  vertical-align: baseline;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 18px;  
`;
const TitleText = styled.div`
  flex: 3;
  font-weight: normal;
  font-size: 18px;
  color: #080808;
  padding: 0;
`;
const HeaderButton = styled.div`
    margin: -5px 0 -5px 5px;
    flex : 1;
    text-align: right;
  `;
const CardContent = styled.div`
    padding: 23px;
    padding-top: 0; 
    box-sizing: border-box;
    color: #383838;
`;

class Card extends Component {

  _openMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    const { title, content, button } = this.props;
    return (
      <CardWrap>
        <CardTitle>
          <TitleText>{ title }</TitleText>
          <HeaderButton>
            { button }
          </HeaderButton>
        </CardTitle>
        <CardContent>
          { content }
        </CardContent>
      </CardWrap>
    );
  }

}

Card.defaultProps = {
  button: null
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.element
};

export default Card;
