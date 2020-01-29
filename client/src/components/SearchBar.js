import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import store from '../store';
import { Components, setInitData, clearContentView } from '../utils/Components';

import api from '../utils/API';
import { setContentComponent, setSections, setSearchParams } from '../actions/newsActions'
import { languages, sortOptions } from '../data/options'

import Suggestions from './Suggestions';


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
    showMenu: false,
    results: [],
    sourceName: ""
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
      console.log(res)
      setInitData(res);
      store.dispatch(setSections([res]))
    }, params)
  }

  componentDidMount() {
    this.getSuggestions();
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
            onKeyPress={this.listenToKeyPress}
          />
          <button type="button" onClick={this.onShowMenu}>
            <span className = 'material-icons'>expand_more</span>
          </button>
          <button type='button' onClick={this.handleClick}>
            <span className='material-icons'>search</span>
          </button>
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
              <div className='navigation-bar_dropdown_filter'>
                <label>Source:</label>
                <select
                  type='search'
                  ref={this.sourceRef}
                >
                  <Suggestions sources={this.state.results}/>
                </select>
              </div>
              <div className='navigation-bar_dropdown_filter'>
                {/* TODO page size aus store laden */}
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

  listenToKeyPress = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  handleSource = (event) => {
    let sourceInput = this.sourceRef.current.value;
    if(sourceInput && sourceInput.length > 0){
      this.setState({
        sourceInput: sourceInput
      })
      if(sourceInput) {
        this.getSuggestions();
      }
    }
  }

  getSuggestions() {
    api.getSources((res) => {
      this.setState({
        results: res.sources
      })
    })
  }
}

export default SearchBar;