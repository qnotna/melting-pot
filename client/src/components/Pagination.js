import React, { Component } from 'react';
import store from '../store.js';
import { setSections, setLoadingState, setContentComponent, setPagingData, addSection } from '../actions/index.js';
import api from '../utils/API';

class Pagination extends Component {
    state = {
        totalPages: [1, 2, 3, 4, 5],
        totalResults: store.getState().pagingData.totalResults,
        currentPage: store.getState().pagingData.currentPage,
        currentResults: store.getState().pagingData.currentResults,
        sectionName: ""
    }
    
    handleClick(event) {
        let current = this.state.currentPage;
        console.log("State: " + this.state.currentResults);
        current = (event.target.innerHTML === "Next") ? current + 1 : current - 1;
        
        store.dispatch(setPagingData({
            currentPage: current, 
            totalResults: this.state.totalResults, 
            currentResults: this.state.currentResults
        }));

        this.changePage({component: this.state.sectionName, page: current});
    }

    changePage(urlParams) {
        let componentName = urlParams.component;
        store.dispatch(setSections([]));
        store.dispatch(setLoadingState(true));
        switch(this.state.sectionName){
            case "Hot":
                api.getHot(urlParams, (res) => {
                    store.dispatch(setLoadingState(false));
                    store.dispatch( setSections ( [res] ))
                })
                break;
            case "Latest":
                api.getLatest(urlParams, (res) => {
                    store.dispatch( addSection( res ))
                })
                break;
            case "Results":
                componentName = "SEARCH_" + componentName.toUpperCase();
                api.getSearchResults((res) => {
                        store.dispatch(setLoadingState(false));
                        store.dispatch(setSections([res]))
                    }, 
                    {
                        ...store.getState().searchParams,
                        page: urlParams.page
                    }
                )
                break;

            // Category
            default:
                api.getCategory(urlParams, (res) => {
                    console.log(res)
                    store.dispatch(setLoadingState(false));
                    store.dispatch(setSections([res]));
                })
                break;
        }

        console.log(componentName)
        store.dispatch( setContentComponent(componentName.toUpperCase()) );
    }

    isDisabled(type) {
        if(type === "Next") {
            return (this.state.currentResults < store.getState().searchParams.size) ? true : false;
        }
        else {
            return (this.state.currentPage === 1) ? true : false;
        }
    }

    render() {
        this.state.sectionName = this.props.sectionName;
        this.state.totalResults = this.props.totalResults;
        this.state.currentResults = this.props.currentResults;
        return(
            <div>
                <button type="button" onClick={(event) => this.handleClick(event)} disabled={this.isDisabled("Prev")}>Prev</button>
                <button type="button" onClick={(event) => this.handleClick(event)} disabled={this.isDisabled("Next")}>Next</button>
            </div>
        )
        // const pageNumbers = this.state.totalPages.map((pageNum, index) => {
        // return <li key={index} onClick={(event) => this.handleClick(event)}>{pageNum}</li>;
        // })
        // return(
        //     <div>
        //         <ul>
        //             {pageNumbers}
        //         </ul>
        //     </div>
        // );
    }
}

export default Pagination;