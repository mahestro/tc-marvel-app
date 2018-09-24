import React from 'react';
import Icon from '../components/Icon';

const RequestError = () => {
  return (
    <section className="message">
      <Icon
        id="heartbroken"
        className="icon--xlarge" />

      <h5>Oops.. Something went wrong</h5>
      <p>Please contact your copilot at <strong>mahestro.topcoder@gmail.com</strong></p>
      <p>Send an email including the challenge name and your Topcoder handle.</p>
    </section>
  );
}

export default RequestError;
