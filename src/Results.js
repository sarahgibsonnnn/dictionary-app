import React from 'react';
import './Results.css';
import Meaning from './Meaning'
import Phonetics from './Phonetics'
import Photos from './Photos'


export default function Results(props) {
    if(props.results) {
        return (
            <div className = "Results">
               <div className="word">
                    <h1>{props.results.word}</h1>
                    <Phonetics phonetics={props.results.phonetics}/>
                </div>
               {props.results.meanings.map(function(meaning, index) {
                
                 return <div key={index}>
                    <Meaning meaning={meaning} />
                    </div>
               })}
               <Photos photos={props.photos}/>
            </div>
        )
    } else {
        return null
    }
  
}