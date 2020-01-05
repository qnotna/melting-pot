import React, { Component } from 'react';
import formatLangOption from '../utils/langOptFormat'
import store from '../store';
import { Components } from '../utils/Components';

import api from '../utils/API';
import { setContentComponent, setSections, setSearchParams } from '../actions'
import { languages, sortOptions } from '../data/options'


class SearchBar extends Component {
    qRef = React.createRef();
    langRef = React.createRef();
    sortRef = React.createRef();
    sourceRef = React.createRef();
    formRef = React.createRef();
    sizeRef = React.createRef();

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
        const params = store.getState().searchParams
        api.getSearchResults((res) => {
            store.dispatch(setSections([res]))
        }, params)
    }

    componentDidMount = () => {
        if(document.getElementById('searchBarForm') !== null) {
            if(store.getState().darkMode) {
                var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.add('darkMode-navigation-bar-button');
                }
            }
            else {
                var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.remove('darkMode-navigation-bar-button');
                }
            }
        }
    }

    render() {
        if(document.getElementById('searchBarForm') !== null) {
            if(store.getState().darkMode) {
                var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.add('darkMode-input-text');
                }
            }
            else {
                var buttonsInSearchBarForm = document.getElementById('searchBarForm').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.remove('darkMode-input-text');
                }
            }
        }

        return (
            <form ref={this.formRef} id='searchBarForm'>
                <label style={{'display':'none'}}>Search term</label>
                <input type='search' ref={this.qRef} placeholder='Search for title and content...' />

                <div className="dropdown">
                    {
                        this.state.showMenu && (

                            <div className="dropdown-content">
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
                            </div>
                        )
                    }
                </div>
                <button type="button" onClick={this.onShowMenu} style={{'padding':'0 0 0 0.4em'}}>
                    <span  
                        style = {{'fontSize':'24px'}} 
                        className = 'material-icons'
                    >
                        expand_more
                    </span>
                </button>

                <button type='button' onClick={this.handleClick} style={{'padding':'0 0 0 0.5em'}}>
                    <span  
                        style = {{'fontSize':'20px'}} 
                        className = 'material-icons'
                    >
                        search
                    </span>
                </button>
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

        // Set search parameters to be accesible in global state
        store.dispatch( setSearchParams({ q, language, sortBy, sources, size }) );

        // Get search sections and set them to be accesible in global state
        this.loadSearchResultSections()

        // Set the component to be displayed in the app to search results
        store.dispatch( setContentComponent(Components.SEARCH_RESULTS) )

        // this.formRef.current.reset();
    }
}

export default SearchBar;