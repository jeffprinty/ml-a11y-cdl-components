import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const calcWidth = cols => `${cols * 8.333333}%`;

const Col = styled.div`
  flex-basis: ${props => calcWidth(props.sm)};
  max-width: ${props => calcWidth(props.sm)};
  padding: 0 15px;

  @media (min-width: 715px) and (max-width: 1030px) {
    flex-basis: ${props => calcWidth(props.md)};
    max-width: ${props => calcWidth(props.md)};
  }
  @media (min-width: 1030px) {
    flex-basis: ${props => calcWidth(props.lg)};
    max-width: ${props => calcWidth(props.lg)};
  }
`;

const Column = ({ className, children, sm, md, lg }) => (
  <Col
    className={ className }
    sm={ sm }
    md={ md }
    lg={ lg }
  >
    { children }
  </Col>
  );

Column.defaultProps = {
  sm: 12,
  md: 12,
  lg: 12,
  className: ''
};

const stringOrNumberProp = PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number, PropTypes.string ]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Column.propTypes = {
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  className: PropTypes.oneOfType([ PropTypes.element, PropTypes.array ]),
  children: PropTypes.element.isRequired
};

export default Column;
