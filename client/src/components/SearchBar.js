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
        event.preventDefault();
        event.target.innerHTML = (this.state.showMenu === true) ? "Erweitert" : "Einklappen";
        this.setState((prevState) => ({
            showMenu: !prevState.showMenu
        }))
    }


    loadSearchResultSections() {
        const params = store.getState().searchParams
        api.getSearchResults((res) => {
            store.dispatch(setSections([res]))
        }, params)
    }

    render() {
        return (
            <form ref={this.formRef}>
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
                <button type="button" onClick={this.onShowMenu}>Erweitert</button>

                <button type='button' onClick={this.handleClick} style={{'padding':'0 0 0 0.5em'}}>
                    <span  
                        style = {{'color':'black', 'fontSize':'20px'}} 
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