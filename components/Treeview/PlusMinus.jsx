import React from 'react';
import PropTypes from 'prop-types';


const PlusMinus = (props) => {
  let ariaLabelledBy;
  let titleId;
  let descId;

  const {
    hidden, title, desc, role,
    width, height, viewBox,
    fill, className, x, y,
    handleClick, expanded
  } = props;

  if (title) {
    titleId = (Math.random() * 100000).toFixed(0);
    ariaLabelledBy = `${titleId}`;
  }

  if (desc) {
    descId = (Math.random() * 100000).toFixed(0);
    ariaLabelledBy += ` ${descId}`;
  }

  return (
    <svg
      className={ className }
      onClick={ handleClick }
      width={ width }
      height={ height }
      viewBox={ viewBox }
      fill={ fill }
      aria-label={ expanded ? 'open' : 'closed' }
      role={ role }
      aria-labelledby={ ariaLabelledBy }
      aria-hidden={ hidden }
      x={ x }
      y={ y }
    >
      {title
        ? <title id={ titleId }>{ title }</title>
        : null
      }

      {desc
        ? <desc id={ descId }>{ desc }</desc>
        : null
      }

      <g>
        {expanded
          ? <rect x="3" y="11" width="18" height="2" />
          : <polygon points="21 11 13 11 13 3 11 3 11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11" />
        }
      </g>
    </svg>
  );
};

PlusMinus.defaultProps = {
  className: '',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  x: '',
  y: '',
  fill: '#000000',
  role: 'img',
  title: '',
  desc: '',
  hidden: false,
  expanded: false,
  handleClick: () => {}
};

PlusMinus.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
  fill: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  expanded: PropTypes.bool,
  hidden: PropTypes.bool,
  handleClick: PropTypes.func
};


export default PlusMinus;
