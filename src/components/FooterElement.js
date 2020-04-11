import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp, faCommentDots, faShare, faEye, faArrowDown} from '@fortawesome/free-solid-svg-icons';

import '../styles/footer-element.css';

const FooterElements = ()=>(
    <>
        <button className="upvote">
            <FontAwesomeIcon icon={faArrowUp}/>
            <span>5 Upvotes</span>
        </button>
        <button className="comments">
            <FontAwesomeIcon icon={faCommentDots} />
        </button>
        <button className="share">
            <FontAwesomeIcon icon={faShare} />
        </button>
        <button className="views">
            <FontAwesomeIcon icon={faEye} />
            <span>10</span>
        </button>
        <button className="downvote">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>0 Downvotes</span>
        </button>
    </>
);

export default FooterElements;