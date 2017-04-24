import PropTypes from 'prop-types';
/* eslint-disable */
import React, { Component } from 'react';

const propTypesArray = [ {
  key: 'array',
  test: PropTypes.array,
  isRequired: PropTypes.array.isRequired
}, {
  key: 'boolean',
  test: PropTypes.bool,
  isRequired: PropTypes.bool.isRequired
}, {
  key: 'function',
  test: PropTypes.func,
  isRequired: PropTypes.func.isRequired
}, {
  key: 'number',
  test: PropTypes.number,
  isRequired: PropTypes.number.isRequired
}, {
  key: 'object',
  test: PropTypes.object,
  isRequired: PropTypes.array.isRequired
}, {
  key: 'string',
  test: PropTypes.string,
  isRequired: PropTypes.string.isRequired
}, {
  key: 'node',
  test: PropTypes.node,
  isRequired: PropTypes.node.isRequired
}, {
  key: 'element',
  test: PropTypes.element,
  isRequired: PropTypes.element.isRequired
} ];

const getReactPropType = (propTypeFunc) => {
  let name = 'custom';
  let isRequired = false;

  propTypesArray.some((propType) => {
    if (propTypeFunc === propType.test) {
      name = propType.key;
      return true;
    }
    if (propTypeFunc === propType.isRequired) {
      name = propType.key;
      isRequired = true;
      return true;
    }
    return false;
  });
  return { name, isRequired };
};


function Doc(props) {
  const propTypes = [];
  const {
    componentClass,
    ignore,
    propDescriptionMap
  } = props;
  for (const propName in componentClass.propTypes) {
    if (ignore.indexOf(propName)) {
      propTypes.push({
        propName,
        type: getReactPropType(componentClass.propTypes[propName]),
        description: propDescriptionMap[propName] || ''
      });
    }
  }

  return (
    <div>
      <ul>
        {
          propTypes.map(propObj => (
            <li key={ propObj.propName }>
              <b>{propObj.propName}</b>
              <i>{`: ${propObj.type.name}`}</i>
              {propObj.description && ` - ${propObj.description}`}
              <b>{`${propObj.type.isRequired ? ' required' : ''}`}</b>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Doc.defaultProps = {
  propDescriptionMap: {},
  ignore: []
};

Doc.propTypes = {
  componentClass: PropTypes.func,
  propDescriptionMap: PropTypes.object,
  ignore: PropTypes.array
};

export default Doc;
