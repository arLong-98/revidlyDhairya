import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';
import '../styles/container.css';

export default class RevidlyHome extends React.Component{

    render(){
        return(
            <div className="container">
                <Header />
                <Feed />
                <Footer />
            </div>
            
        );
    }
}