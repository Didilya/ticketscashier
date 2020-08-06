import React from 'react';
import './NavItem.css';

const navigatiomItem = (props) => (
    <li className = "NavItem">
        <a href = {props.link}
        className = {props.active ? "NavItem a.active" : null}>
            {props.children}
            </a>
    </li>
);

export default navigatiomItem;