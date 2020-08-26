import React from 'react';
import "../css/header.css";

export const Header=(props)=>(
    <div className="header">
    <h3>{props.text}</h3>
    </div> 
)