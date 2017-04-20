
import React from 'react';
import PropTypes from 'prop-types';

/**
 * This React component is intended as a stop-gap for accessibility concerns.
 */

function SafeAnchor({ href, onClick }) {
  const _onClick = (event) => {
    const { href, onClick } = this.props;

    if (href == null) {
      event.preventDefault();
    }

    if (onClick) onClick(event);
  };

  const props = this.props;

  return (
    <a
      role={ props.href ? undefined : 'button' }
      { ...props }
      onClick={ this._onClick }
    />
  );
}

SafeAnchor.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func
};

SafeAnchor.version = '0.1.0';

export default SafeAnchor;
