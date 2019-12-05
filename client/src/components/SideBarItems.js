import React, {Component} from 'react';

class SideBarItems extends Component {

  isDefaultChecked = (item) => ((item === 'Melting Hot') ? true : false);
  createItemKey = (item) => (`item-${item.toLowerCase().replace(' ', '-')}`)

  render() {
    return this.props.items.map((item) => (
      <li className='sidebar-item' key={this.createItemKey(item.title)}>
        <input type='radio' name='sidebar-items' id={this.createItemKey(item.title)} defaultChecked={this.isDefaultChecked(item.title)}/>
        <label className='sidebar-item-label' htmlFor={this.createItemKey(item.title)}>
          <img src='http://www.clker.com/cliparts/a/1/C/x/k/E/pink-square-hi.png' alt='Item piktogram'/>
          <p className='sidebar-item-title' unread-amount={item.unreadAmount}>{item.title}</p>
        </label>
      </li>
    ));
  }

}

export default SideBarItems;