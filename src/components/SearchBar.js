import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../store';
import { Components, setInitData, clearContentView } from '../utils/Components';

import api from '../utils/API';
import { setContentComponent, setSections, setSearchParams, setSectionTags } from '../actions/newsActions'
import { languages, sortOptions, pageSizeOptions } from '../data/options'

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
    results: []
  }

  onShowMenu = (event) => {
    this.getSuggestions()

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

      if(res.error){
        res.error.status = 400;
      }
      else if(res.articles.length === 0) {
        res.error = { status: "No Results" }
      }

      setInitData(res);
      store.dispatch(setSections([res]))
      // clear tags on search
      store.dispatch(setSectionTags([]))
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
            onKeyPress={this.listenToKeyPress}
          />
          <button type="button" onClick={this.onShowMenu}>
            <span className = 'material-icons'>expand_more</span>
          </button>
          {/* <Link to="/search-results"> */}
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
                <select onChange={this.getSuggestions} ref={this.langRef}>
                  {
                    Object.keys(languages).map((key =>
                      <option key={key} value={key} 
                      selected={this.handleSelect(key)}
                      >{languages[key]}</option>
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
                  name="sources"
                  ref={this.sourceRef}
                >
                  <Suggestions sources={this.state.results}/>
                </select>
              </div>
              <div className='navigation-bar_dropdown_filter'>
                <label>Articles Per Page:</label>
                <input type="number" 
                defaultValue={store.getState().settings.search.pageSize}
                min="1"
                max="100"
                ref={this.sizeRef}>
                </input>
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
    this.props.history.push("/search-results");

    let searchParams = {
      q: this.qRef.current.value,
      language: this.langRef.current ? this.langRef.current.value : store.getState().settings.search.language,
      sortBy: this.sortRef.current ? this.sortRef.current.value : "publishedAt",
      sources: this.sourceRef.current ? this.sourceRef.current.value.toLowerCase() : [],
      pageSize: this.sizeRef.current ? this.sizeRef.current.value : store.getState().settings.search.pageSize,
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
    // this.onShowMenu(event);
    this.qRef.current.value = "";
  }

  listenToKeyPress = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  getSuggestions = () => {
    // TODO select language from preferences
    let urlParams = {
      language: this.langRef.current ? this.langRef.current.value : store.getState().settings.search.language,
    }
    api.getSources(urlParams, (res) => {
      this.setState({
        results: res.sources
      })
    })
  }

  handleSelect = (key) => {
    return key === store.getState().settings.search.language ? true : false; 
  }

}


export default withRouter(SearchBar);