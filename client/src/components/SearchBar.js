import React, { Component } from 'react';
import formatLangOption from '../utils/langOptFormat'

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

    render() {
        return (
            <form ref={this.formRef}>
                <label>Search term</label>
                <input type='search' ref={this.qRef} placeholder='Search for title and content...'/>

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
                                <input type='search' ref={this.sourceRef} placeholder='die-zeit, Bild, ...'/>
                                
                                <label>Articles per page</label>
                                <select ref={this.sizeRef}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </div>
                        ) : ( null )
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
        const searchInput = {
            query: this.qRef.current.value,
            lang: langCode,
            sortBy: sortBy,
            source: sources,
            size: size
        }
        this.props.func(searchInput);
        this.formRef.current.reset();
    }
}

export default SearchBar;