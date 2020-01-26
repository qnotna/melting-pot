import React, {Component} from 'react';
import store from '../store';

import { setContentComponent } from "../actions/newsActions"
import { Components } from '../utils/Components';

import api from '../utils/API';
import { addSection, setSections } from '../actions/newsActions'

class SideBarItems extends Component {

  isDefaultChecked = (item) => ((item === 'Melting Hot') ? true : false);
  createItemKey = (isCategory, item) => {
    if(isCategory){
      return (`${item.toLowerCase()}`)
    } else {
      return (`item-${item.toLowerCase().replace(' ', '-')}`)
    }
  }

  setCurrentComponent(category, component){
    switch (component) {
      case Components.HOME:
      this.loadSections()
      break;
      case Components.BUSINESS:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;
      case Components.ENTERTAINMENT:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;
      case Components.HEALTH:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;
      case Components.SCIENCE:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;
      case Components.SPORTS:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;
      case Components.TECHNOLOGY:
      api.getCategory(category, (res) => {
        store.dispatch(setSections([res]))
      })
      break;

      default:
      break;
    }

    store.dispatch( setContentComponent(component))
  }

  loadSections(){
    api.getHot((res) => {
      store.dispatch( setSections ( [res] ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
  }

  render() {
    return this.props.items.map((item) => (
      <li
        className='sidebar_item'
        key={this.createItemKey(false, item.title)}
        id={this.createItemKey(true, item.title)}
        onClick={(event) => this.setCurrentComponent(event.currentTarget.id, item.component)}
      >
        <input
          type='radio'
          name='sidebar-items'
          defaultChecked={this.isDefaultChecked(item.title)}
        />
        <label
          className='sidebar_item_label'
          htmlFor={this.createItemKey(false, item.title)}
        >
          <img src={item.icon} alt={item.title}/>
          <p className='sidebar_item_title' unread-amount={item.unreadAmount}>{item.title}</p>
        </label>
      </li>
    ));
  }

}

export default SideBarItems;