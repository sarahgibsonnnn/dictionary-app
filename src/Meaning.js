import React from 'react';
import './Meaning.css'

export default function Meaning(props) {
    return(
        <div className = "Meaning">
            <h3 className = "speech">
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key = {index} className="definition-example">
                        <p className = "definition"> {definition.definition} </p>
                        <p className = "example"> {definition.example} </p>
                    </div>
                )
            })}
        </div>
    )
}