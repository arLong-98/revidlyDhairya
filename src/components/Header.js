import React from 'react';
import Clans from './Clans';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css';

const Header = ()=>(
    <div className="header-container">
        <header className="header">
                <img className="profile-picture" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/>

                <button className="button">Write Something here...</button>
                <button className="search"><FontAwesomeIcon icon={faSearch} /></button>
        </header>

        <div className="clan-container">
            <Clans />
        </div>
        
    </div>
    
    
);

export default Header;