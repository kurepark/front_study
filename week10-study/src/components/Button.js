import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <button
            className={`btn ${props.type || ''}`}
            onClick={props.onclick}
        >
            {props.children}
        </button>
    );
}