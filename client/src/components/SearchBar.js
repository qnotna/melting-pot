import React, { Component } from 'react';
import formatLangOption from '../utils/langOptFormat'
import store from '../store';
import { Components } from '../utils/Components';

import { setSearchInput, setContentComponent } from '../actions';

import api from '../utils/API';
import { setSections } from '../actions'


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

    setSearchBarInput(input) {
        store.dispatch(setSearchInput(input))
    }

    setCurrentComponent(component) {
        store.dispatch(setContentComponent(component))
    }

    onShowMenu = (event) => {
        event.preventDefault();
        event.target.innerHTML = (this.state.showMenu === true) ? "Erweitert" : "Einklappen";
        this.setState((prevState) => ({
            showMenu: !prevState.showMenu
        }))
    }


    loadSearchResultSections() {
        const input = store.getState().search_input
        api.getSearchResults((res) => {
            store.dispatch(setSections([res]))
        }, input)
    }

    render() {
        return (
            <form ref={this.formRef}>
                <label>Search term</label>
                <input type='search' ref={this.qRef} placeholder='Search for title and content...' />

                <div className="dropdown">
                    {
                        this.state.showMenu ? (

                            <div className="dropdown-content">
                                <label>Language</label>
                                <select ref={this.langRef}>
                                    <option>Arabian</option>
                                    <option>Dutch</option>
                                    <option>English</option>
                                    <option>French</option>
                                    <option>German</option>
                                    <option>Italian</option>
                                    <option>Norwegian</option>
                                    <option>Portuguese</option>
                                    <option>Russian</option>
                                    <option>Spanish</option>
                                    <option>Sweden</option>
                                    {/* <option>he</option>
                                    <option>ud</option>
                                    <option>zh</option> */}
                                </select>

                                <label>Sort by</label>
                                <select ref={this.sortRef}>
                                    <option>publishedAt</option>
                                    <option>relevancy</option>
                                    <option>popularity</option>
                                </select>

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
                <button type="button" onClick={this.onShowMenu}>Erweitert</button>

                <button type='button' onClick={this.handleClick}>Search</button>
            </form>
        );
    }

    handleClick = (event) => {
        event.preventDefault();
        //TODO Sprache automatisch aus User-Einstellungen wählen
        let langCode = this.langRef.current ? formatLangOption(this.langRef.current.options[this.langRef.current.selectedIndex].text) : "de";
        let sortBy = this.sortRef.current ? this.sortRef.current.options[this.sortRef.current.selectedIndex].text : "publishedAt";
        let sources = this.sourceRef.current ? this.sourceRef.current.value : [];
        let size = this.sizeRef.current ? this.sizeRef.current.value : 20;
        let from = this.fromRef.current ? this.fromRef.current.value : "";
        let to = this.toRef.current ? this.toRef.current.value : "";
        const searchInput = {
            query: this.qRef.current.value,
            lang: langCode,
            lang: langCode,
            sortBy: sortBy,
            source: sources,
            size: size,
            from: from,
            to: to
        }
        this.setSearchBarInput(searchInput)
        this.loadSearchResultSections()
        this.setCurrentComponent(Components.SEARCH_RESULTS)
        this.formRef.current.reset();
    }
}

export default SearchBar;