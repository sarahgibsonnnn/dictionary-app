import React from 'react';
import './Synonyms.css'

export default function Synonyms(props) {
    console.log(props.synonyms)
    if (props.synonyms.length) {
        return (
            <div className = "Synonyms">
                 {props.synonyms.map(function(synonym, index) {
                return <span className = "synonym" key={index}>{synonym}</span>
                    
            })}
            </ div>
        )        
    } else {
        return null
    }
}