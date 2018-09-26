import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import TextField from '../components/TextField'
import Button from '../components/Button'
import * as siteActions from '../actions/siteActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errors: [],
      saving: false,
      loggedIn: false
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.isFormValid())
      return;

    this.setState({saving: true});
    this.props.actions.authenticate(this.state.password)
    .then(() => {
      this.setState({
        saving: false,
        loggedIn: true
      });
    })
    .catch(err => {
      this.setState({
        saving: false,
        errors: {
          password: err.message
        }
      });
    });
  }

  handleTextfield = e => {
    const field = e.target.name;
    let state = this.state;
    state[field] = e.target.value;
    this.setState(state);
  }

  isFormValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.password.trim() === '') {
      formIsValid = false;
      errors.password = 'Password is required';
    }

    this.setState({errors});
    return formIsValid;
  }

  render() {
    const { password, errors, saving, loggedIn } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (loggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <section className="form">
        <h5>Did mahestro authorize you? <span role="img" aria-label="">🤔</span></h5>

        <div className="wrapper--form">
          <form onSubmit={this.onSubmit}>
            <TextField
              type="password"
              name="password"
              value={password}
              label="Ultra secret password"
              required={true}
              error={errors.password}
              onChange={this.handleTextfield} />

            <div className="form__submit-area">
              <Button
                label="Login"
                progress={saving} />
            </div>

          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.site.authenticate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(siteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
