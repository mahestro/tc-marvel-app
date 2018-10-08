import React from 'react';
import PropTypes from 'prop-types';
import RequestCard from './RequestCard';

const RequestsList = ({requests, editRequestLink, handleDelete}) => (
  requests.map(request => (
    <RequestCard
      key={request.requestId}
      title={request.handle}
      memberEmail={request.memberEmail}
      requestDate={request.requestDate}
      requests={request.count}
      marvelLink={request.marvelLink}
      editRequestLink={editRequestLink.replace(':id', request.requestId)}
      handleDelete={handleDelete}
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
