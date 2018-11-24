import React from 'react';
import PropTypes from 'prop-types';
import RequestCard from './RequestCard';

const RequestsList = ({requests, handleDelete, handleRetry}) => (
  requests.map(request => (
    <RequestCard
      key={request.id}
      id={request.id}
      title={request.tcHandle}
      memberEmail={request.tcEmail}
      requestDate={request.createdAt}
      requests={request.baseCount}
      projects={request.projects}
      handleDelete={handleDelete}
      handleRetry={handleRetry}
    />
  ))
);

RequestsList.defaultProps = {
  requests: []
};

RequestsList.propTypes = {
  requests: PropTypes.array
};

export default RequestsList;
