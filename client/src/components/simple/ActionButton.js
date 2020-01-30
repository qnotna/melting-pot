import React from 'react';
import '../../stylesheets/simple/ActionButton.css';
import store from '../../store.js';

const ActionButton = ({ text, type, selected, icon }) => {

  //TODO: Hier muss ein onClick event handler sein das je nach type den item + vollen (geparsten) content speichert oder das item spiechert!
  // <p style={{'display':'inline-block'}}>Für später speichern'</p>

  function handleButton(event){
    // Check ob Browser IndexDB unterstützt
    if ('indexedDB' in window) {
      console.log('This browser support IndexedDB');

      const article = store.getState().news.current_article;
      // console.log(event.target.getAttribute('data-type'));
      if(event.target.getAttribute('data-type') === 'add'){
        // Datenbank anlegen
        var request = indexedDB.open('favoriteArticle', 1);

        // Änderungs/Erzeugungs-Event
        request.onupgradeneeded = function(){
          console.log('Datenbank angelegt');
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
          console.log('Datenbank geöffnet');
          var db = this.result;
          
          // Überprüft ob der Artikel schon in der DB gespeichert wurde
          var trans = db.transaction(['Article'], 'readonly');

          var store = trans.objectStore('Article')
          var requestCheckArticle = store.get(article.url);
          requestCheckArticle.onsuccess = function(evt){
            //console.log(evt.target.result)
            if(evt.target.result === undefined){
              // Zu speichernder Datensatz
              var item = article;
    
              // Speicher-Transaktion
              var trans = db.transaction(['Article'], 'readwrite');
    
              var IndexDBstore = trans.objectStore('Article')
              var requestSaveArticle = IndexDBstore.put(item); // `item` in dem Store ablegen
    
              // Erfolgs-Event
              requestSaveArticle.onsuccess = function(evt){
                //console.log('Eintrag ' + evt.target.result + ' gespeichert');
              };
            }
          }
        }
      }
    }
    else {
      console.log('This browser support IndexedDB');
    }
  }

  return(
    <button data-type={type} type='submit' onClick={(event) => handleButton(event)} className={`action_button action_button-${type}`}>
      <span 
        data-type={type} 
        style = {{'fontSize':'16px', 'marginRight':'6px'}} 
        className = 'material-icons'
      >
        {icon}
      </span>
      <p style={{'display':'inline-block'}} data-type={type}>{text}</p>
    </button>
  );

};

export default ActionButton;