 /* eslint no-param-reassign: 0 */
import { css } from 'styled-components';

const sizes = {
  lg: 2048,
  md: 1030,
  sm: 710
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
