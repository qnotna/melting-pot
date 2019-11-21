import React, {Component} from 'react';

class SideBarItems extends Component {

  isDefaultChecked = (item) => ((item === 'Melting Hot') ? true : false);
  createItemKey = (item) => (`item-${item.toLowerCase().replace(' ', '-')}`)

  render() {
    return this.props.items.map((item) => (
      <div className='sidebar-item' key={this.createItemKey(item)}>
        <input type='radio' name='sidebar-items' id={this.createItemKey(item)} defaultChecked={this.isDefaultChecked(item)}/>
        <label className='sidebar-item-label' htmlFor={this.createItemKey(item)}>
          {item}
        </label>
      </div>
    ));
  }

}

export default SideBarItems;