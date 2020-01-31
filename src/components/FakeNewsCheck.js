import React from 'react';

const FakeNewsCheck = ({ data }) => {

  console.log(data);

  return (data.map((item, index) => {
    const symbol = item.ok ? '✅' : '⚠️';
    return(
      <ul id='reader-view_content_check_item'>
        <li>
          <p>{symbol}</p>
        </li>
        <li>
          <p id='reader-view_content_check_item_second'>{item.category}</p>
        </li>
        <li>
          <p>{item.msg}</p>
        </li>
      </ul>
    )
  }));

};

export default FakeNewsCheck;