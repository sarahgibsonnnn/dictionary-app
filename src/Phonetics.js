import React from 'react';
import './Phonetics.css';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    return ( 
    <div className = "Phonetics">
    
          {props.phonetics.map(function(phonetic, index) {
            console.log(phonetic)
                return (
                <div className="phonetic" style={{display: phonetic.text ? 'flex' : 'none'}}>
                     <ReactAudioPlayer src={phonetic.audio} autoplay controls style={{height: '25px', width: '20px', display: phonetic.audio ? 'block' : 'none'}}/>
                     <span key={index}>{phonetic.text}</span>
                </div>
                )
            })}

    </div>
    )
}