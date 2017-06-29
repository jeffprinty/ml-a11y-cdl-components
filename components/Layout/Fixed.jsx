import React from 'react';
import { bool, number, string, object, oneOfType, shape, element, array } from 'prop-types';
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

const Column = ({ className, children, sm, md, lg, style }) => (
  <Col
    className={ className }
    sm={ sm }
    md={ md }
    lg={ lg }
    style={ style }
  >
    { children }
  </Col>
  );


const stringOrNumberProp = oneOfType([ number, string ]);

const columnProps = oneOfType([
  bool,
  number,
  string,
  shape({
    size: oneOfType([ bool, number, string ]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Column.defaultProps = {
  sm: 12,
  md: 12,
  lg: 12,
  className: '',
  style: {}
};
Column.propTypes = {
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  style: object,
  className: string,
  children: oneOfType([ element, array ]).isRequired
};

export default Column;
