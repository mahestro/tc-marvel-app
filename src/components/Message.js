import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/Icon';

const Message = ({icon, title, children}) => {
  const defaultIconClass = icon && icon.length > 0 ? icon : 'request';

  return (
    <section className="message">
      <Icon
        id={defaultIconClass}
        className="icon--xlarge"
      />
      <h5>{title}</h5>
      { children }
    </section>
  );
}

Message.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object
}

export default Message;
