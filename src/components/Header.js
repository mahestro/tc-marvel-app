import React from 'react';
import PropTypes from 'prop-types';
import logoTopcoder from '../i/topcoder-logo.svg';
import logoMarvel from '../i/marvel-logo.svg';

const Header = ({title}) => {
  return (
    <header>
      <div className="wrapper logo-wrapper">
        <img src={logoTopcoder} alt="Topcoder" />
        <span>+</span>
        <img src={logoMarvel} alt="Marvelapp" />
      </div>
      <div className="title">
        {title}
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Topcoder Challenge'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
