import React, { Component } from 'react';
import RequestSuccess from './RequestSuccess';
import RequestError from './RequestError';
import TextField from '../components/TextField'

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: '',
        tcHandle: ''
      },
      errors: {},
      saving: false,
      saved: true
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.isFormValid())
      return;

    this.setState({saving: true});
  }

  handleTextfield = e => {
    const field = e.target.name;
    let request = this.state.request;
    request[field] = e.target.value;
    this.setState(request);
  }

  isFormValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.request.email.trim() === '') {
      formIsValid = false;
      errors.email = 'Email is a required field. Please enter your email address';
    }

    if (this.state.request.tcHandle.trim() === '') {
      formIsValid = false;
      errors.tcHandle = 'Topcoder handle is a required field. Please enter your Topcoder handle';
    }

    this.setState({errors});
    return formIsValid;
  }

  render() {
    const { email, tcHandle } = this.state.request;
    const { errors, saving, saved } = this.state;

    return (
      <div>
        {
          saved ?
          <RequestError />:
          <section className="form">
            <h5>MarvelApp Request</h5>

            <div className="wrapper--form">
              <form onSubmit={this.onSubmit}>
                <TextField
                  type="email"
                  name="email"
                  value={email}
                  label="Email address"
                  placeholder="you@example.com"
                  required={true}
                  error={errors.email}
                  onChange={this.handleTextfield} />

                <TextField
                  type="text"
                  name="tcHandle"
                  value={tcHandle}
                  label="Topcoder handle"
                  placeholder="e.g. mahestro"
                  required={true}
                  error={errors.tcHandle}
                  onChange={this.handleTextfield} />

                <div className="form__submit-area">
                  <input className="button button--submit" type="submit" value="Send Request" disabled={saving} />
                </div>

              </form>
            </div>
          </section>
        }
      </div>
    );
  }
}

export default RequestForm;
