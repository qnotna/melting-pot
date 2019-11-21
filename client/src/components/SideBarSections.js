import React, {Component, Fragment} from 'react';
import SideBarItems from './SideBarItems.js'

class SideBarSections extends Component {

  render() {
    return this.props.sections.map((section) => (
      <Fragment key={section.id}>
        <p className='sidebar-section'>{section.title}</p>
        <div className='sidebar-items'>
          <SideBarItems items={section.items}/>
        </div>
      </Fragment>
    ));
  }

}

export default SideBarSections;