import React, {Component} from 'react';
import store from '../store';

import { setContentComponent, setLoadingState } from "../actions"
import { Components } from '../utils/Components';

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
        this.loadSections()
        break;
      case Components.BUSINESS:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
      case Components.ENTERTAINMENT:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
      case Components.HEALTH:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
      case Components.SCIENCE:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
      case Components.SPORTS:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
      case Components.TECHNOLOGY:
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        api.getCategory(urlParams, (res) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(setSections([res]))
        })
        break;
    
      default:
        break;
    }

    store.dispatch( setContentComponent(component))
  }

  loadSections(){
    store.dispatch(setSections([]));
    store.dispatch(setLoadingState(true));
    api.getHot((res) => {
      store.dispatch(setLoadingState(false));
      store.dispatch( setSections ( [res] ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
  }

  render() {
    const currentPage = store.getState().currentPage;
    return this.props.items.map((item) => (
      <li 
        className='sidebar-item' 
        key={this.createItemKey(false, item.title)}
        id={this.createItemKey(true, item.title)} 
        onClick={(event) => 
          this.setCurrentComponent( 
            {
              // category: event.currentTarget.id,
              component: item.component, 
              page: currentPage 
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