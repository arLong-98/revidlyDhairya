import React from 'react';
import ReadMoreReact from 'read-more-react';
import FooterElements from './FooterElement'
import '../styles/feed-area.css';

const Feed = ()=>(
    
        <div className="feed-area">
            <div className="post-container">
                <header className="post-header">
                    <div>
                        <img className="post-user-pic" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/>
                    </div>
                    <div>
                        <span className="post-clan-tag">Clan</span>
                        <span className="post-user">User1</span>
                    </div>
                    <div>
                        <span className="post-time">yesterday, 9 pm</span>
                    </div>
                </header>

                <body className="post-body">
                <ReadMoreReact text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                readMoreText={"..."}/>
                </body>

                <footer className="post-footer">
                    <FooterElements />
                </footer>
            </div>
            <hr/>
            
            <div className="post-container">
                <header className="post-header">
                    <div>
                        <img className="post-user-pic" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/>
                    </div>
                    <div>
                        <span className="post-clan-tag">Clan</span>
                        <span className="post-user">User1</span>
                    </div>
                    <div>
                        <span className="post-time">yesterday, 9 pm</span>
                    </div>
                </header>

                <body className="post-body">
                <ReadMoreReact text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                readMoreText={"..."}/>
                </body>

                <footer className="post-footer">
                    <FooterElements />
                </footer>
            </div>
            <hr/>
            <div className="post-container">
                <header className="post-header">
                    <div>
                        <img className="post-user-pic" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/>
                    </div>
                    <div>
                        <span className="post-clan-tag">Clan</span>
                        <span className="post-user">User1</span>
                    </div>
                    <div>
                        <span className="post-time">yesterday, 9 pm</span>
                    </div>
                </header>

                <body className="post-body">
                <ReadMoreReact text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                readMoreText={"..."}/>
                </body>

                <footer className="post-footer">
                    <FooterElements />
                </footer>
            </div>
            <hr/>                  
        </div>
);

export default Feed;