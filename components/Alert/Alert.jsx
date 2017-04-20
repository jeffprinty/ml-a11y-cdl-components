import React from 'react';
import PropTypes from 'prop-types';
import randomize from 'randomatic';
import styled, { css } from 'styled-components';

import Colors from '../colors';
import Icon from '../Icon/Icon';

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

const AlertIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 13px;
`;

const AlertBox = styled.div`
  ${AlertStyle}
  border: 1px solid ${props => alertVariants[props.alertType].secondary};
  background-color: ${props => alertVariants[props.alertType].bgColor};
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


function Alert({ text, alertType, icon }) {
  console.log('text, alertType, icon', text, alertType, icon);
  const ariaDescribedBy = randomize('Aa0', 5);
  return (
    <AlertBox alertType={ alertType }>
      <AlertIcon>
        <Icon
          aria-describedby={ ariaDescribedBy }
          type={ alertVariants[alertType].iconType }
          title={ alertType }
          fill={ alertVariants[alertType].secondary }
        />
      </AlertIcon>
      <AlertText id={ ariaDescribedBy }>{ text }</AlertText>
    </AlertBox>
  );
}

Alert.defaultProps = {
  text: 'Alert text',
  alertType: 'alert'
};

Alert.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  icon: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired
};

export default Alert;
