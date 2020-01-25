import React, { Component } from 'react';
import formatLangOption from '../utils/langOptFormat'
import store from '../store';
import { Components } from '../utils/Components';

import api from '../utils/API';
import { setContentComponent, setSections, setSearchParams } from '../actions/newsActions'
import { languages, sortOptions } from '../data/options'


class SearchBar extends Component {
  qRef = React.createRef();
  langRef = React.createRef();
  sortRef = React.createRef();
  sourceRef = React.createRef();
  formRef = React.createRef();
  sizeRef = React.createRef();
  fromRef = React.createRef();
  toRef = React.createRef();

  state = {
    showMenu: false
  }

  onShowMenu = (event) => {
    if(event.target.tagName.toString() === 'SPAN') {
      event.preventDefault();
      event.target.innerHTML = (this.state.showMenu === true) ? "expand_more" : "expand_less";
      this.setState((prevState) => ({
        showMenu: !prevState.showMenu
      }))
    }
    if(event.target.tagName.toString() === 'BUTTON') {
      event.preventDefault();
      event.target.firstChild.innerHTML = (this.state.showMenu === true) ? "expand_more" : "expand_less";
      this.setState((prevState) => ({
      showMenu: !prevState.showMenu
      }))
    }
  }

  loadSearchResultSections() {
    const params = store.getState().news.searchParams
    api.getSearchResults((res) => {
      store.dispatch(setSections([res]))
    }, params)
  }

  // handleDarkMode = () => {
  //   if(document.getElementById('searchBarForm') !== null) {
  //     if(store.getState().auth.user.settings.darkMode) {
  //       var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
  //       for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
  //         buttonsInSearchBarForm[a].classList.add('darkMode-navigation-bar-button');
  //       }
  //
  //       var inputsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('input');
  //       for(var b = 0; b < inputsInSearchBarForm.length; b++) {
  //         inputsInSearchBarForm[b].classList.add('darkMode-input-text');
  //       }
  //
  //       var searchDropdown = document.getElementsByClassName('dropdown');
  //       for(var c = 0; c < searchDropdown.length; c++) {
  //         searchDropdown[c].classList.add('darkMode-dropdown');
  //       }
  //     }
  //     else {
  //       var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
  //       for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
  //         buttonsInSearchBarForm[a].classList.remove('darkMode-navigation-bar-button');
  //       }
  //
  //       var inputsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('input');
  //       for(var b = 0; b < inputsInSearchBarForm.length; b++) {
  //         inputsInSearchBarForm[b].classList.remove('darkMode-input-text');
  //       }
  //
  //       var searchDropdown = document.getElementsByClassName('dropdown');
  //       for(var c = 0; c < searchDropdown.length; c++) {
  //         searchDropdown[c].classList.remove('darkMode-dropdown');
  //       }
  //     }
  //   }
  // }

  componentDidMount = () => {
    // this.handleDarkMode();
  }

  componentDidUpdate = () => {
    var dropdownContent = document.getElementsByClassName('dropdown-content');
    if(dropdownContent !== null) {
      if(store.getState().auth.user.settings.darkMode) {
        for(var e = 0; e < dropdownContent.length; e++) {
          var dropdownContentInput = dropdownContent[e].getElementsByTagName('input');
          for(var f = 0; f < dropdownContentInput.length; f++) {
            dropdownContentInput[f].classList.add('darkMode-input-text');
          }

          var dropdownContentSelect = dropdownContent[e].getElementsByTagName('select');
          for(var f = 0; f < dropdownContentSelect.length; f++) {
            dropdownContentSelect[f].classList.add('darkMode-select');
          }

          var dropdownContentOption = dropdownContent[e].getElementsByTagName('option');
          for(var l = 0; l < dropdownContentOption.length; l++) {
            dropdownContentOption[l].classList.add('darkMode-option');
          }
        }
      }
      else {
        for(var e = 0; e < dropdownContent.length; e++) {
          var dropdownContentInput = dropdownContent[e].getElementsByTagName('input');
          for(var f = 0; f < dropdownContentInput.length; f++) {
            dropdownContentInput[f].classList.remove('darkMode-input-text');
          }

          var dropdownContentSelect = dropdownContent[e].getElementsByTagName('select');
          for(var f = 0; f < dropdownContentSelect.length; f++) {
            dropdownContentSelect[f].classList.remove('darkMode-select');
          }

          var dropdownContentOption = dropdownContent[e].getElementsByTagName('option');
          for(var l = 0; l < dropdownContentOption.length; l++) {
            dropdownContentOption[l].classList.remove('darkMode-option');
          }
        }
      }
    }
  }

  render() {
    // this.handleDarkMode();

    return (
      <form ref={this.formRef} id='searchBarForm'>
      <label>Search term</label>
      <input className='navigation-bar-searchInput' type='search' ref={this.qRef} placeholder='Search for title and content...' />

      <button type="button" onClick={this.onShowMenu}>
        <span className = 'material-icons'>expand_more</span>
      </button>

      <button type='button' onClick={this.handleClick}>
        <span className='material-icons'>search</span>
      </button>

      <div className="dropdown">
        {
          this.state.showMenu ? (

            <div id='dropdownContent' className="dropdown-content">
            <label>Language</label>
            <select ref={this.langRef}>
              {Object.keys(languages).map((key =>
                <option key={key} value={key}>{languages[key]}</option>
              ))}
            </select>

            <label>Sort by</label>
            <select ref={this.sortRef}>
              {Object.keys(sortOptions).map((key =>
                <option key={key} value={key}>{sortOptions[key]}</option>
              ))}
            </select>
            {/* TODO: Soures toLowerCase + check if available
                maybe select instead of input? */}
              <label>Source</label>
              <input type='search' ref={this.sourceRef} placeholder='die-zeit, Bild, ...' />

              <label>Articles per page</label>
              <select ref={this.sizeRef}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>

              <label>From</label>
              <input type="date" ref={this.fromRef}/>

              <label>To</label>
              <input type="date" ref={this.toRef}/>
              </div>
              ) : (null)
            }
          </div>
        </form>
      );
    }

  handleClick = (event) => {
    event.preventDefault();

    //TODO Sprache automatisch aus User-Einstellungen wählen
    let q = this.qRef.current.value
    let language = this.langRef.current ? this.langRef.current.value : "de";
    let sortBy = this.sortRef.current ? this.sortRef.current.value : "publishedAt";
    let sources = this.sourceRef.current ? this.sourceRef.current.value : [];
    let size = this.sizeRef.current ? this.sizeRef.current.value : 20;
    let from = this.fromRef.current ? this.fromRef.current.value : "";
    let to = this.toRef.current ? this.toRef.current.value : "";

    // Set search parameters to be accesible in global state
    store.dispatch( setSearchParams({ q, language, sortBy, sources, size, from , to }) );

    // Get search sections and set them to be accesible in global state
    this.loadSearchResultSections()

    // Set the component to be displayed in the app to search results
    store.dispatch( setContentComponent(Components.SEARCH_RESULTS) )

    // this.formRef.current.reset();
  }
}

export default SearchBar;