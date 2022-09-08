import React, { useState } from 'react'
import axios from "axios"
import './Dictionary.css'
import Results from './Results'

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiURL).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
       search()
    }

    

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }

    function load() {
        setLoaded(true);
        search()
    }

    if (loaded) {
        return <div className = "Dictionary">
        <form onSubmit={handleSubmit} >
            <h1>What word would you like to look up?</h1>
            <input className="form-control" type="search" placeholder="Search.." autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            <div className="hint">suggested words: sunset, wine, penguins..</div>
        </form>
        <Results results={results}/>
    </div>
    } else {
        load();
        return "Loading.."
    }


}