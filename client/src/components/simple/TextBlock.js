import React from 'react';

const TextBlock = ({ paragraphs }) => {

  //TODO: use regex with req res -> str.match(<p>(.*)?</p>)
  // let paragraphs = text.split('\n');

  return paragraphs.map((paragraph, index) => (
    // <p key={index}>{paragraph}</p>
    <div key={index} dangerouslySetInnerHTML={{ __html: paragraph + "<br><br>" }} />
  ));

};

export default TextBlock;