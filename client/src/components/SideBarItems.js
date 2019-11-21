import React, {Component} from 'react';

class SideBarItems extends Component {

  render() {
    console.log(this.props.items);
    return this.props.items.map((item) => (
      <div className='sidebar-item' key={this.props.items.indexOf(item)}>
        <input type='radio' name='sidebar-item'/>
        <p>{item}</p>
      </div>
    ));
  }

}

export default SideBarItems;