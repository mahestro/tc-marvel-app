import React from 'react';
import Icon from '../components/Icon';
import imgGif from '../i/marvelapp-declaration.gif';

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
        <p>
          See <a href="http://take.ms/AEyR9">video example</a>.
        </p>
      </section>

      <div className="message-img-wrapper">
        <img src={imgGif} width="600" alt="Share marvelapp link" />
      </div>
    </div>
  );
}

export default RequestSuccess;
