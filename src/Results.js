import React from 'react';
import './Results.css';
import Meaning from './Meaning'
import Phonetics from './Phonetics'

export default function Results(props) {
    if(props.results) {
        return (
            <div className = "Results">
               <h1>{props.results.word}</h1>
               <Phonetics phonetics={props.results.phonetics}/>
               {props.results.meanings.map(function(meaning, index) {
                
                 return <div key={index}>
                    <Meaning meaning={meaning} />
                    </div>
               })}
            </div>
        )
    } else {
        return null
    }
  
}