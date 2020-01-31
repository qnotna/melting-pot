import React from 'react';
import ErrorImage from '../img/error/spilled-handle.png';

const NoContent = ({ errorData }) => {

  document.title = errorData.status;

  return(
    <div id='no-content'>
      <div id='no-content_container'>
        <div id='no-content_container_error'>
          <h1 id='no-content_container_error_code'>
            {errorData.status}
          </h1>
          <h2 id='no-content_container_error_message'>
            {errorData.message}
          </h2>
        </div>
        <div id='no-content_container_text'>
          <p>Hey, look where you are going!</p>
          <p>You probably did not mean to bump into the news-cook, but now the news-sauce is spilled and he has to start over again!</p>
          <p>You really should not be here, get out of the kitchen!</p>
        </div>
      </div>
      <img
        id='no-content_image'
        src={ErrorImage}
        alt='Splilled News Soup'
        />
    </div>
  );

};

export default NoContent;