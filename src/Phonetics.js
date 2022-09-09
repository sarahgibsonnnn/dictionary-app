import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
    return ( 
    <div className = "Phonetics">
    
          {props.phonetics.map(function(phonetic, index) {
                return (
                <div className="phonetic">
                    <span key={index}>{phonetic.text}</span>
                     <a href={phonetic.audio} target="_blank" rel="noreferrer" style={{display: phonetic.audio ? 'block' : 'none'}}> Listen </a>
                </div>
                )
            })}

    </div>
    )
}