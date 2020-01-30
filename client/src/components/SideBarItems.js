import React, {Component} from 'react';
import store from '../store';

import { setContentComponent, addSection, setSections } from "../actions/newsActions";
import { Components, clearContentView, setInitData } from '../utils/Components';

import api from '../utils/API';

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

      case Components.FAVORITEN:
        clearContentView()
        this.loadFavoriteSections()
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

  loadFavoriteSections(){
    if ('indexedDB' in window) {
      //console.log('This browser support IndexedDB');

      // Datenbank anlegen
      var request = indexedDB.open('favoriteArticle', 1);

      // Änderungs/Erzeugungs-Event
      request.onupgradeneeded = function(){
        //console.log('Datenbank angelegt');
        var db = this.result;
        if(!db.objectStoreNames.contains('Article')){
          const store = db.createObjectStore('Article', {
            keyPath: 'url',
            unique: true
          });
        }
      };

      // Öffnungs-Event (feuert nach upgradeneeded)
      request.onsuccess = function(){
        //console.log('Datenbank geöffnet');
        var db = this.result;
          
        // Überprüft ob der Artikel schon in der DB gespeichert wurde
        var trans = db.transaction(['Article'], 'readonly');

        var IndexDBstore = trans.objectStore('Article')
        var requestAllArticle = IndexDBstore.getAll();
        requestAllArticle.onsuccess = function(evt){
          //console.log('Eintrag ' + evt.target.result + ' gespeichert');

          // baue array das valide für die content View ist
          let contentViewObject = 
            {
              name: 'Favoriten',
              type: 'grid',
              articles: evt.target.result,
              totalResults: evt.target.result.length
            }
          
          setInitData(contentViewObject);
          store.dispatch(setSections([contentViewObject]))
          
        };
      }
    }
    else {
      console.log('This browser support IndexedDB');
    }
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