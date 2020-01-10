import React, {Component} from 'react';
import store from '../store';

import { setContentComponent } from "../actions"
import { Components } from '../utils/Components';

import api from '../utils/API';
import { addSection, setSections } from '../actions'



class SideBarItems extends Component {

  isDefaultChecked = (item) => ((item === 'Melting Hot') ? true : false);
  createItemKey = (item) => (`item-${item.toLowerCase().replace(' ', '-')}`)

  setCurrentComponent(component){

    switch (component) {
      case Components.HOME:
        this.loadSections()
        break;
    
      default:
        break;
    }

    store.dispatch( setContentComponent(component))
  }

  loadSections(){
    api.getHot((res) => {
      store.dispatch( addSection ( res ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
  }

  render() {
    console.log('render in sidebaritems')
    return this.props.items.map((item) => (
      <li 
        className='sidebar-item' 
        key={this.createItemKey(item.title)}
      >
        <input 
          type='radio' 
          name='sidebar-items' 
          id={this.createItemKey(item.title)} 
          defaultChecked={this.isDefaultChecked(item.title)}
        />
        <label 
          className='sidebar-item-label' 
          htmlFor={this.createItemKey(item.title)} 
          onClick={() => this.setCurrentComponent(item.component)}
        >
          <span  
              style = {{'fontSize':'16px', 'marginRight':'6px'}} 
              className = 'material-icons'
            >
              {item.icon}
            </span>
          <p className='sidebar-item-title' unread-amount={item.unreadAmount}>{item.title}</p>
        </label>
      </li>
    ));
  }

}

export default SideBarItems;