import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as requestActions from '../actions/requestActions';
import * as Routes from '../constants/routes';
import RequestsList from '../components/RequestsList';

class PrototypesRequestsList extends Component {
  componentDidMount() {
    this.props.actions.loadRequests();
  }

  handleDelete = e => {
    e.preventDefault();
  }

  render() {
    return (
      <section className="form">
        <Link to={Routes.TEAMS}>Back to Teams</Link>
        <div className="list__title">
          <h5>Requests</h5>
        </div>

        <div className="card-list-wrapper">
          <RequestsList
            requests={this.props.requests}
            editRequestLink={Routes.PROTOTYPE}
            handleDelete={this.handleDelete}
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
