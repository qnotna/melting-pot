import React, {Component, Fragment} from 'react';
import SideBarItems from './SideBarItems.js'

class SideBarSections extends Component {

  render() {
    return this.props.sections.map((section) => (
      <li key={section.id}>
        <p className='sidebar-section'>{section.title}</p>
        <ul className='sidebar-items'>
          <SideBarItems items={section.items}/>
        </ul>
      </li>
    ));
  }

}

export default SideBarSections;