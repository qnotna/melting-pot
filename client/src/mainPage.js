import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {slide as Menu} from "react-burger-menu";
import { StickyContainer, Sticky } from 'react-sticky';
import { slider } from './slider';




class mainPage extends React.Component {
  render(){
    return (
      <div className="wrapper">
        <header className="db_header">
          <div className="lt_side">
            <a href className="logo">
              <img className="logo" src="logo01.png" alt = "logo" />
            </a>
          </div>
          <form className="search_box" action> <span className="search_inputbox">
                <input type="text" placeholder="Search" name="search" />
              </span>
          </form>
          <div className="rt_login">
            <a href="loginPage">
              <img src="Login.jpg" alt />Abmelden</a>
          </div>
        </header>
        <div className="clear" />
        <div className="main_body">
        <StickyContainer>
          <div className= "theBar" >
        <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Marks">
        Marks
      </a>
      
      <a className="menu-item" href="/Downloads">
        Downloads
      </a>

      <a className="menu-item" href="/MyPress">
        MyPress
      </a>
      <a className="menu-item" href="/Business">
        Business
      </a>
      <a className="menu-item" href="/Entertainment">
        Entertainment
      </a>
      <a className="menu-item" href="/Health">
        Health
      </a><a className="menu-item" href="/Science">
        Science
      </a>
      <a className="menu-item" href="/Sportz">
       Sportz
      </a>
      <a className="menu-item" href="/Technology">
        Technology
      </a>
      <a className="menu-item" href="/Setting">
       Setting
      </a>
      <a className="menu-item" href="/Contact">
        Contact
      </a>

    </Menu>
    </div>
    </StickyContainer>
          <div className="right_contentpanel">
            <div className="viewed_tags">
              <h3>Most-Viewed Tags</h3>
              <div className="tag_list"> <a href="tacos" target="_blank">
                    #tacos
                  </a>
                <a href="flexitarian" target="_blank">
                    #flexitarian
                  </a>
                <a href="sriracha-tumblr" target="_blank">
                    #sriracha-tumblr
                  </a>
                <a href="chicharrones" target="_blank">
                    #chicharrones
                  </a>
                <a href="dreamcatcher" target="_blank">
                    #dreamcatcher
                  </a>
                <a href="skateboard-green-juice-photo" target="_blank">
                    #skateboard-green-juice-photo
                  </a>
                <a href="bicycle-rights-blog" target="_blank">
                    #bicycle-rights-blog
                  </a>
                <a href="iPhone" target="_blank">
                    #iPhone
                  </a>
                <a href="helvetica" target="_blank">
                    #helvetica
                  </a>
              </div>
            </div>
            <div className="headlines">
              <h3>Top-News Headline 1</h3>
              <div className="news_list">
                <div className="owl-carousel owl-theme newsslider">
                  <div className="item">
                    <div className="newslist_items">
                      <a href>
                        <img className="news_logo" src="BildProxy.jpg" alt />
                        <h3>Title</h3>
                        <p>Wow, so much Tennis.
                          <br />This article is so interesting...
                          <br />
                          <br />ReadingTime: XYZ min
                          <br />New York Times</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="newslist_items">
                      <a href>
                        <img className="news_logo" src="BildProxy.jpg" alt />
                        <h3>Title</h3>
                        <p>Wow, so much Tennis.
                          <br />This article is so interesting...
                          <br />
                          <br />ReadingTime: XYZ min
                          <br />New York Times</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="newslist_items">
                      <a href=" ">
                        <img className="news_logo" src="BildProxy.jpg" alt />
                        <h3>Title</h3>
                        <p>Wow, so much Tennis.
                          <br />This article is so interesting...
                          <br />
                          <br />ReadingTime: XYZ min
                          <br />New York Times</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="newslist_items">
                      <a href>
                        <img className="news_logo" src="BildProxy.jpg" alt />
                        <h3>Title</h3>
                        <p>Wow, so much Tennis.
                          <br />This article is so interesting...
                          <br />
                          <br />ReadingTime: XYZ min
                          <br />New York Times</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="newslist_items">
                      <a href>
                        <img className="news_logo" src="BildProxy.jpg" alt />
                        <h3>Title</h3>
                        <p>Wow, so much Tennis.
                          <br />This article is so interesting...
                          <br />
                          <br />ReadingTime: XYZ min
                          <br />New York Times</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" /></div>
          </div>
      </div>
        <div className="clear" /></div>
    );
  }
}


export default mainPage;
