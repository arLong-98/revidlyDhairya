import React from 'react';
import '../styles/footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons'
const Footer = ()=>(
    <div className="footer">
        <button className="footer-button"><FontAwesomeIcon icon={faHome}/></button>
        <button className="footer-button"><FontAwesomeIcon icon={faPlus}/></button>
        <button className="footer-button"><FontAwesomeIcon icon={faUser}/></button>
    </div>
);

export default Footer;