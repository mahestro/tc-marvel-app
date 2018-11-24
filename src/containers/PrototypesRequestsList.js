import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as requestActions from '../actions/requestActions';
import * as Routes from '../constants/routes';
import RequestsList from '../components/RequestsList';

class PrototypesRequestsList extends Component {
  componentDidMount() {
    this.props.actions.loadRequests(this.props.match.params.id);
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.actions.deleteRequest(e.target.name)
      .catch(err => {
        throw(err);
      });
  }

  handleRetry = e => {
    e.preventDefault();
    this.props.actions.retryRequest(e.target.name)
      .catch(err => {
        throw(err);
      });
  }

  render() {
    return (
      <section className="form">
        <Link to={Routes.TEAMS}>Back to Teams</Link>
        <div className="list__title">
          <h5>Requests ({this.props.requests.length})</h5>
        </div>

        <div className="card-list-wrapper">
          <RequestsList
            requests={this.props.requests}
            handleDelete={this.handleDelete}
            handleRetry={this.handleRetry}
          />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(requestActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrototypesRequestsList);
