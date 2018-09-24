import React from 'react';
import Icon from '../components/Icon';

const RequestSuccess = () => {
  return (
    <div>
      <section className="message">
        <Icon
         id="request"
         className="icon--xlarge" />

        <h5>Your request has been sent!</h5>

        <p>
          You will receive an invite <strong>within the next eight (8) hours</strong>.
          In case you don’t receive an invite in that specified time, please contact your copilot at mahestro.topcoder@gmail.com
        </p>
        <div className="sep"></div>
        <div className="typography-lead">What's next?</div>
        <p>
          Add sreens to your marvelapp presentation and provide the shareable link in your declaration notes.
        </p>
      </section>

      <div className="message-img-wrapper">
        <img src="https://api.monosnap.com/rpc/file/download?id=SpcCE3v4VPwZ6tgQmE3Jb9qagAeFtA" width="540" alt="Share marvelapp link" />
      </div>
    </div>
  );
}

export default RequestSuccess;
