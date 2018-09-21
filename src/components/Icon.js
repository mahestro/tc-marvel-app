import React from 'react';
import PropTypes from 'prop-types';
import svgSprite from '../i/sprite-defs.svg';

const Icon = ({id, className}) => {
  let wrapperClass = className && className.length > 0 ? `${className} icon--${id}` : `icon icon--regular icon--${id}`;

  return (
    <svg className={wrapperClass}>
      <use xlinkHref={`${svgSprite}#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id:        PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
