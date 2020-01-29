import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { Components, setInitData, clearContentView } from '../utils/Components';

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
    clearContentView();
    api.getSearchResults((res) => {
      setInitData(res);
      console.log(res)
      store.dispatch(setSections([res]))
    }, params)
  }



  render() {
    // TODO: this should be it's own component with input child components!
    return (
      <form ref={this.formRef} id='searchBarForm'>
        <div className='navigation-bar_default'>
          <input
            id='search-bar'
            type='search'
            ref={this.qRef}
            placeholder='Search Articles for Title or Content'
          />
          <button type="button" onClick={this.onShowMenu}>
            <span className = 'material-icons'>expand_more</span>
          </button>
          {/* <Link to='search-results'> */}
          <button type='button' onClick={this.handleClick}>
            <span className='material-icons'>search</span>
          </button>
          {/* </Link> */}
        </div>
        {
          this.state.showMenu ? (
            <div className='navigation-bar_dropdown'>
              <div className='navigation-bar_dropdown_filter'>
                <label>Language:</label>
                <select ref={this.langRef}>
                  {
                    Object.keys(languages).map((key =>
                      <option key={key} value={key}>{languages[key]}</option>
                    ))
                  }
                </select>
              </div>
              <div className='navigation-bar_dropdown_filter'>
                <label>Sort by:</label>
                <select ref={this.sortRef}>
                  {Object.keys(sortOptions).map((key =>
                    <option key={key} value={key}>
                      {
                        sortOptions[key]
                      }
                    </option>
                  ))}
                </select>
              </div>
              {
                /* TODO: Soures toLowerCase + check if available
                maybe select instead of input? */
              }
              <div className='navigation-bar_dropdown_filter'>
                <label>Source:</label>
                <input
                  type='search'
                  ref={this.sourceRef}
                  placeholder='die-zeit, Bild, ...'
                  />
              </div>
              <div className='navigation-bar_dropdown_filter'>
                <label>Articles Per Page:</label>
                <select ref={this.sizeRef}>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className='navigation-bar_dropdown_filter'>
                <label>From:</label>
                <input type="date" ref={this.fromRef}/>
              </div>
              <div className='navigation-bar_dropdown_filter'>
                <label>To:</label>
                <input type="date" ref={this.toRef}/>
              </div>
            </div>
          ) : (null)
        }
      </form>
    );
  }

  handleClick = (event) => {
    event.preventDefault();

    //TODO Sprache automatisch aus User-Einstellungen wählen
    let searchParams = {
      q: this.qRef.current.value,
      language: this.langRef.current ? this.langRef.current.value : "de",
      sortBy: this.sortRef.current ? this.sortRef.current.value : "publishedAt",
      sources: this.sourceRef.current ? this.sourceRef.current.value.toLowerCase() : [],
      pageSize: this.sizeRef.current ? this.sizeRef.current.value : 20,
      from: this.fromRef.current ? this.fromRef.current.value : "",
      to: this.toRef.current ? this.toRef.current.value : "",
      page: 1
    }

    // Set search parameters to be accesible in global state
    store.dispatch( setSearchParams(searchParams) );

    // Get search sections and set them to be accesible in global state
    this.loadSearchResultSections()

    // Set the component to be displayed in the app to search results
    store.dispatch( setContentComponent(Components.SEARCH_RESULTS) )

    this.qRef.current.value = "";
  }
}

export default SearchBar;