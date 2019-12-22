import React from 'react';
import '../../stylesheets/simple/TextBlock.css';

const TextBlock = ({ text }) => {

  //TODO: use regex with req res -> str.match(<p>(.*)?</p>)
  let paragraphs = text.split('\n');

  return paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

};

export default TextBlock;