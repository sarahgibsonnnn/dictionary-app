import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms'

export default function Meaning(props) {
    console.log(props)
    return(
        <div className = "Meaning">
            <h3 className = "speech">
                {props.meaning.partOfSpeech}
            </h3>
            <div className = "definitions-examples">
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key = {index} className="definition-example">
                        <p className = "definition"> {definition.definition} </p>
                        <p className = "example"> {definition.example} </p>
                    </div>
                )
            })}
            <Synonyms synonyms={props.meaning.synonyms}/>
            </div>
            
        </div>
    
    )
}