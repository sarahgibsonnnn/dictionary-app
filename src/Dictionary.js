import React, { useState } from 'react'
import axios from "axios"
import './Dictionary.css'
import Results from './Results'

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)
    let [photos, setPhotos] = useState(null)

    function handleResponse(response) {
        setResults(response.data[0])
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiURL).then(handleResponse);

        let pexelsAPIKey = "563492ad6f917000010000017cb23f93a97040cf9ff01964b6a5e66b";
        let pexelsAPIURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        let headers = { Authorization: `Bearer ${pexelsAPIKey}` };
        axios.get(pexelsAPIURL, {headers: headers }).then(handlePexelsResponse)
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
        <Results results={results} photos={photos}/>
    </div>
    } else {
        load();
        return "Loading.."
    }


}