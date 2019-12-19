import React from 'react';

const TextBlock = ({ text }) => {
  
  //TODO: use regex with req res -> str.match(<p>(.*)?</p>)
  let paragraphs = text.split('\n');

  return paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

};

export default TextBlock;