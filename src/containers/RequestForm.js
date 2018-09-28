import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RequestSuccess from './RequestSuccess';
import RequestError from './RequestError';
import TextField from '../components/TextField'
import Button from '../components/Button'
import { TCMARVEL_API_BASE_URL, MAIL_SENDER, MAIL_RECEIVER } from '../constants/config';
import * as siteActions from '../actions/siteActions';

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
      saved: false,
      exception: false
    }
  }

  componentDidMount() {
    if (!isNaN(this.props.match.params.challengeId)) {
      const challengeId = Number.parseInt(this.props.match.params.challengeId, 10);

      this.props.actions.loadChallengeTitle(challengeId);
    }
  }

  onSubmit = e => {
    e.preventDefault();

    if (!this.isFormValid())
      return;

    this.setState({saving: true});

    const data = {
      message: {
        to: MAIL_RECEIVER,
        from: MAIL_SENDER,
        subject: `Marvelapp Request - ${this.props.challengeId} - ${this.props.challengeTitle}`,
        text: `Request from ${this.state.request.tcHandle}, email: ${this.state.request.email}`
      }
    };

    const postConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    fetch(`${TCMARVEL_API_BASE_URL}/mail`, postConfig)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({saved: true});
        } else {
          this.setState({exception: true});
        }
      })
      .catch(err => {
        this.setState({exception: true});
        console.log(`Error sending email: ${err}`);
      });
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
      errors.email = 'Email is required. Please enter your email address';
    }

    if (this.state.request.tcHandle.trim() === '') {
      formIsValid = false;
      errors.tcHandle = 'Topcoder handle is required. Please enter your Topcoder handle';
    }

    this.setState({errors});
    return formIsValid;
  }

  render() {
    const { email, tcHandle } = this.state.request;
    const { errors, saving, saved, exception } = this.state;

    return (
      <div>
        {
          exception && <RequestError />
        }

        {
          saved && <RequestSuccess />
        }

        {
          !saved && !exception  &&
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
                  <Button
                    label="Send Request"
                    progress={saving} />
                </div>

              </form>
            </div>
          </section>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(siteActions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(RequestForm);
