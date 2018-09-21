import React from 'react';
import logoTopcoder from '../i/topcoder-logo.svg';
import logoMarvel from '../i/marvel-logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logoTopcoder} /> + <img src={logoMarvel} />
      Autocognita - Literacy Android Application Concept Design Challenge
    </header>
  );
}

export default Header;
