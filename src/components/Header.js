import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoTopcoder from '../i/topcoder-logo.svg';
import logoMarvel from '../i/marvel-logo.svg';

const Header = ({mainTitle}) => {
  return (
    <header>
      <div className="wrapper logo-wrapper">
        <img src={logoTopcoder} alt="Topcoder" />
        <span>+</span>
        <img src={logoMarvel} alt="Marvelapp" />
      </div>
      <div className="title">
        {mainTitle}
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: ''
};

Header.propTypes = {
  title: PropTypes.string
};

const mapStateToProps = state => {
  return {
    mainTitle: state.site.mainTitle
  };
};

export default connect(mapStateToProps)(Header);
