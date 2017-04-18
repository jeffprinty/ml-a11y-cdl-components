import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MLIcon } from '../index';
import Colors from '../colors';
import SafeAnchor from '../SafeAnchor';

const ButtonStyle = styled.div`
  position: relative;
  display: inline-block;

  font-family: 'Source Sans Pro',sans-serif;
  font-size: 15px;
  line-height: 33px;
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
  
  height: 34px;
  padding: ${props => props.icon ? '0 15px 0 12px' : '0 15px'};
  margin: 5px;
  
  background-color: ${props => props.primary ? Colors.aqua : 'transparent'}

  border: ${props => props.primary ? 'none' : `1px solid ${Colors.aqua}`};
  border-radius: 3px;
  
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(0,117,142,1);
  }
`;
const Title = styled.span`
  line-height: 30px;
  margin-left: ${props => props.icon ? '8px' : '0'};
`;
const Icon = styled.span`
  position: relative;
  top: 4px;
  vertical-align: middle;
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
`;

class Button extends Component {
  renderAnchor() {
    return (
      <SafeAnchor { ...this.props } />
    );
  }
  render() {
    const { onClick, icon, title, primary, href } = this.props;

    if (href) {
      return this.renderAnchor(...this.props);
    }

    return (
      <ButtonStyle
        { ...this.props }
        onClick={ onClick }
      >
        { icon ?
          <Icon>
            <MLIcon
              title={ title }
              type={ icon }
              fill={ primary ? Colors.pure_white : Colors.aqua }
            />
          </Icon>
        : null }
        <Title { ...this.props }>{ title }</Title>
      </ButtonStyle>
    );
  }
}

Button.defaultProps = {
  btnClass: 'default',
  btnType: '',
  href: '',
  icon: '',
  onClick: () => {},
  primary: false
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string
};

export default Button;
