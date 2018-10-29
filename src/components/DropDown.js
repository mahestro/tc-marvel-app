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
        <a href="#nowhere" onClick={this.toggleDropDown}>{label}</a>
        {
          !this.state.isHidden && (
            <ul>
              {
                items.map((item, index) => (
                  <DropDownItem
                    key={`${item.id}_${index}_${item.marvelAppId}`}
                    name={`${item.projectName}_${item.marvelAppId}`}
                    label={item.projectName}
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
