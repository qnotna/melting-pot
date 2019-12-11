import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';





class mainPage extends React.Component {

  render(){
    return (
      <div className="wrapper">
        <header className="db_header">
          <div className="lt_side">
            <a href="javascript:void(0)" className="menu_tag"> <span>☰</span>
            </a>
            <a href className="logo">
              <img className="logo" src="logo01.png" alt />
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
          <div className="left_navpanel">
            <ul>
              <li>
                <a href="home" target="_blank">
                  <img src="IconProxy.jpg" />Home</a>
              </li>
              <li>
                <a href="Marks" target="_blank">
                  <img src="IconProxy.jpg" />Marks</a>
              </li>
              <li>
                <a href="Downloads" target="_blank">
                  <img src="IconProxy.jpg" />Downloads</a>
              </li>
              <li>
                <a href="MyPress" target="_blank">
                  <img src="IconProxy.jpg" />MyPress</a>
              </li>
              <li>
                <a href="Business" target="_blank">
                  <img src="IconProxy.jpg" />Business</a>
              </li>
              <li>
                <a href="Entertainment" target="_blank">
                  <img src="IconProxy.jpg" />Entertainment</a>
              </li>
              <li>
                <a href="Health" target="_blank">
                  <img src="IconProxy.jpg" />Health</a>
              </li>
              <li>
                <a href="Science" target="_blank">
                  <img src="IconProxy.jpg" />Science</a>
              </li>
              <li>
                <a href="Sportz" target="_blank">
                  <img src="IconProxy.jpg" />Sportz</a>
              </li>
              <li>
                <a href="Technology" target="_blank">
                  <img src="IconProxy.jpg" />Technology</a>
              </li>
              <li>
                <a href="Setting" target="_blank">
                  <img src="IconProxy.jpg" />Setting</a>
              </li>
              <li>
                <a href="Contact" target="_blank">
                  <img src="IconProxy.jpg" />Contact</a>
              </li>
            </ul>
          </div>
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
            <div className="news_separator" />
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
