import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/App.css';

import ContentView from './ContentView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';
// import ReaderView from './components/ReaderView.js';

import userExampleData from '../example/user.json';
import sideBarSectionsExampleData from '../example/sideBarSections.json';
import contentViewSectionsExampleData from '../example/contentViewSections.json';
import contentViewTagsExampleData from '../example/contentViewTags.json';
// import readerViewArticleExampleData from './example/readerViewArticle.json';

import Axios from 'axios';


class Home extends Component {
    state = {
        topHeadlines: []
    }

    isCollapsed = false;
    collapseSidebar = (event) => {
        this.isCollapsed = !this.isCollapsed;
        let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
        sideBar.setAttribute('collapsed', this.isCollapsed.toString());
    }

    componentDidMount() {
        Axios.get("http://localhost:5000/newsapi/top-headlines?country=de")
            .then(
                res => {
                    this.setState({
                        topHeadlines: res
                    })
                }
            ).catch(
                err => console.log(err)
            )
    }

    render() {
        console.log(this.state)

        return (
            <div className='App'>
                <div id='left' ref='Sidebar'>
                    <SideBar
                        sections={sideBarSectionsExampleData}
                        user={userExampleData}
                    />
                </div>
                <div id='right'>
                    <NavigationBar
                        collapseSidebar={this.collapseSidebar.bind(this)}
                    />
                    <ContentView
                        sections={
                            // this.state.topHeadlines.data.articles
                            contentViewSectionsExampleData
                        }
                        tags={contentViewTagsExampleData}
                        test="test"
                    />
                    {
                        // <ReaderView
                        //   article={this.article}
                        // />
                    }
                </div>
            </div>
        );
    }

}

export default Home;