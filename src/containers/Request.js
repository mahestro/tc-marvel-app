import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import RequestForm from './RequestForm';
import { TC_API_BASE_URL } from '../constants/config';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeId: -1,
      title: '',
      error: false
    };
  }

  componentDidMount() {
    if (!isNaN(this.props.match.params.challengeId)) {
      const challengeId = Number.parseInt(this.props.match.params.challengeId, 10);

      fetch(`${TC_API_BASE_URL}/v3/challenges/${challengeId}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            challengeId: challengeId,
            title: data.result.content.challengeName
          });
        })
        .catch(err => {
          console.log(`Topcoder API Error: ${err}`);
        });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div>
        { this.state.error && <Redirect to="/error" /> }

        <Header title={this.state.title} />
        <RequestForm
          challengeId={this.state.challengeId}
          challengeTitle={this.state.title} />
      </div>
    );
  }
}

export default Request;
