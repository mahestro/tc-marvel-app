import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({type, label, required, name, placeholder, value, onChange, error}) => {
  const setInputType = (t) => {
    switch (t) {
      case 'textarea':
        return (
          <textarea
            name={name}
            id={name}
            className="textarea"
            placeholder={placeholder}
            value={value}
            onChange={onChange} ></textarea>
        );

      case 'email':
        return (
          <input
            name={name}
            id={name}
            className="textfield"
            type="email"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
        );

      case 'text':
        return (
          <input
            name={name}
            id={name}
            className="textfield"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
        );

      case 'password':
        return (
          <input
            name={name}
            id={name}
            className="textfield"
            type="password"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
        );

      default: break;
    }
  };

  let wrapperClass = 'form__field';
  if (error && error.length > 0) {
    wrapperClass += ' form__field--error';
  }

  return (
    <div className={wrapperClass}>
      <div className="form__label">
        <label htmlFor={name}>{label}</label>
        { required && <span className="input-required"> *</span> }
      </div>
      { setInputType(type) }
      { error && <div className="form__field__alert">{error}</div> }
    </div>
  );
};

TextField.defaultProps = {
  type: 'text'
};

TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextField;
