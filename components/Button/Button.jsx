import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import randomize from 'randomatic';

import Colors from '../colors';
import { Icon } from '../index';

const buttonStyle = css`
  position: relative;
  display: inline-block;
  height: 34px;
  margin: 5px;

  font-family: 'Source Sans Pro',sans-serif;
  font-size: 15px;
  line-height: 33px;
  text-decoration: none;

  padding: 0 15px;
  border-radius: 3px;
  border: 1px solid ${Colors.aqua};
  
`;

const ActiveButton = styled.a`
  ${buttonStyle}
  background-color: ${props => props.primary ? Colors.aqua : 'transparent'}
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
  
  padding: ${props => props.icon ? '0 15px 0 12px' : '0 15px'};
  border: ${props => props.primary ? 'none' : `1px solid ${Colors.aqua}`};
  
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
    background: ${props => props.primary ? Colors.aqua : 'rgba(0, 117, 142, 0.1)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(0,117,142,1);
  }
`;

const DisabledButton = styled.button`
  ${buttonStyle}

  cursor: default;
  color: ${props => props.primary ? Colors.pure_white : Colors.light_gray};
  background-color: ${props => props.primary ? Colors.light_gray : 'transparent'}
  border: 1px solid #dddddd;
`;

const Title = styled.span`
  line-height: 30px;
  margin-left: ${props => props.icon ? '8px' : '0'};
`;
const IconWrap = styled.span`
  position: relative;
  top: 4px;
  vertical-align: middle;
  color: ${props => props.primary ? Colors.pure_white : Colors.aqua};
`;

function Button(props) {
  const { onClick, icon, title, primary, href, disabled } = props;

  const handleClick = (event) => {
    if (href === null) {
      event.preventDefault();
    }

    if (onClick) onClick(event);
  };

  // Basic
  let iconFill = disabled ? Colors.light_gray : Colors.aqua;

  // Primary
  if (primary) {
    iconFill = Colors.pure_white;
  }

  const renderIcon = () => (
    <IconWrap>
      <Icon
        title={ title }
        type={ icon }
        fill={ iconFill }
      />
    </IconWrap>
  );

  const ariaLabelledBy = randomize('Aa0', 5);
  const renderLabel = () => <Title id={ ariaLabelledBy } icon={ icon }>{ title }</Title>;

  if (disabled) {
    return (
      <DisabledButton
        aria-labelledby={ ariaLabelledBy }
        aria-disabled={ disabled }
        tabIndex={ 0 }
        primary={ primary }
        { ...props }
      >
        { icon && renderIcon() }
        { renderLabel() }
      </DisabledButton>
    );
  }

  return (
    <ActiveButton
      role={ href ? undefined : 'button' }
      icon={ icon }
      href={ href }
      primary={ primary }
      onKeyDown={ handleClick }
      onClick={ handleClick }
      tabIndex={ 0 }
    >
      { icon && renderIcon() }
      { renderLabel() }
    </ActiveButton>
  );
}

Button.defaultProps = {
  btnClass: 'default',
  btnType: '',
  href: null,
  icon: null,
  onClick: () => {},
  primary: null,
  disabled: false
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};

export default Button;
