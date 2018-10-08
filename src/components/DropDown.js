import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownItem from './DropDownItem';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  toggleDropDown = () => {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const { label, items, handleClick } = this.props;

    return (
      <div className="dropdown">
        <a onClick={this.toggleDropDown}>{label}</a>
        {
          !this.state.isHidden && (
            <ul>
              {
                items.map(item => (
                  <DropDownItem
                    key={`${item.name}_${item.id}`}
                    name={`${item.name}_${item.id}`}
                    label={item.name}
                    handleClick={handleClick}
                  />
                ))
              }
            </ul>
          )
        }
      </div>
    );
  }
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handleClick: PropTypes.func
};

export default DropDown;
