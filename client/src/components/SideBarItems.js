import React, {Component} from 'react';
import store from '../store';

import { setContentComponent, setLoadingState } from "../actions"
import { Components, clearContentView, setInitData } from '../utils/Components';

import api from '../utils/API';
import { addSection, setSections } from '../actions'

class SideBarItems extends Component {

  isDefaultChecked = (item) => ((item === 'Melting Hot') ? true : false);
  createItemKey = (isCategory, item) => {
    if(isCategory){
      return (`${item.toLowerCase()}`)
    } else {
      return (`item-${item.toLowerCase().replace(' ', '-')}`)
    }
  }

  setCurrentComponent(urlParams){
    const component = urlParams.component;
    switch (component) {
      case Components.HOME:
        clearContentView()
        this.loadSections()
        break;
    
      default:
        clearContentView()
        api.getCategory(urlParams, (res) => {
          setInitData(res);
          store.dispatch(setSections([res]))
        })
        break;
    }

    store.dispatch( setContentComponent(component))
  }

  loadSections(){

    api.getHot((res) => {
      setInitData(res);
      store.dispatch( setSections ( [res] ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
  }

  render() {
    return this.props.items.map((item) => (
      <li 
        className='sidebar-item' 
        key={this.createItemKey(false, item.title)}
        id={this.createItemKey(true, item.title)} 
        onClick={(event) => 
          this.setCurrentComponent( 
            {
              component: item.component, 
              page: 1 
            }
          )}
      >
        <input 
          type='radio' 
          name='sidebar-items' 
          defaultChecked={this.isDefaultChecked(item.title)}
        />
        <label 
          className='sidebar-item-label' 
          htmlFor={this.createItemKey(false, item.title)} 
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