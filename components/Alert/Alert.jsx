import React from 'react';
import { oneOfType, shape, string, element, func, bool } from 'prop-types';
import randomize from 'randomatic';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';
import Colors from '../colors';

const alertVariants = {
  alert: {
    bgColor: Colors.very_light_blue,
    secondary: Colors.medium_blue,
    iconType: 'info_outline'
  },
  warning: {
    bgColor: Colors.very_light_yellow,
    secondary: Colors.yellow,
    iconType: 'alert_outline'
  },
  error: {
    bgColor: Colors.very_light_red,
    secondary: Colors.medium_red,
    iconType: 'not'
  },
  success: {
    bgColor: Colors.very_light_green,
    secondary: Colors.medium_green,
    iconType: 'circle_check_outline'
  }
};

const AlertStyle = css`
  position: relative;
  width: 80%;
  height: 44px;
  line-height: 42px;
  font-size: 14px;
  color: ${Colors.blackish};
  box-sizing: border-box;
`;

const AlertWrap = styled.div`
  ${AlertStyle}
  border: 1px solid ${props => alertVariants[props.type].secondary};
  background-color: ${props => alertVariants[props.type].bgColor};
`;

const AlertIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 13px;
`;

const DismissIcon = styled.button`
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 13px;
  right: 13px;
`;

const AlertText = styled.span`
  display: inline-block;
  padding-left: 45px;
  box-sizing: border-box;
  a, a:link, a:active, a:visited {
    color: ${Colors.aqua}; 
    text-decoration: underline;
    margin-left: 3px;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;

function AlertBox({ shortId, content, options, dismiss }) {
  const { type = 'alert', dismissable = true } = options;
  return (
    <AlertWrap
      type={ type }
    >
      <AlertIcon>
        <Icon
          aria-describedby={ shortId }
          type={ alertVariants[type].iconType }
          title={ `${type} icon` }
          fill={ alertVariants[type].secondary }
        />
      </AlertIcon>
      <AlertText
        role="alert"
        id={ shortId }
      >
        { content }
      </AlertText>
      { dismissable &&
        <DismissIcon
          onClick={ () => dismiss(shortId) }
        >
          <Icon
            type="x"
            title={ 'Dismiss' }
            width="16"
            height="16"
            fill={ alertVariants[type].secondary }
          />
        </DismissIcon>
      }
    </AlertWrap>
  );
}
AlertBox.defaultProps = {
  options: {
    type: 'warning',
    dismissable: true
  }
};
AlertBox.propTypes = {
  content: oneOfType([
    element,
    string
  ]).isRequired,
  dismiss: func.isRequired,
  options: shape({
    type: string,
    dismissable: bool,
    dismiss: func
  })
};
export default AlertBox;
