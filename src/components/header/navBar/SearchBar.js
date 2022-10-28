import React, { useState, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../../../stylesheets/SearchBar.css';
import getDocsFromFirebase from "../../../helpers/getDocsFromFirebase";
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [results, setResults] = useState([]);
    const searchInputRef = useRef();

    const unFocusInput = (e) => {
        e.target.value=""
    }
    const searchString = (string) => {
        if(!string){
            setResults([]);
            return;
        };
        getDocsFromFirebase("title", string)
            .then( (result) => {
                const listMatches = result.docs.map( item => {
                    return { ...item.data() }
                });
                listMatches.length && setResults(listMatches);
            })
            .catch((error) => {
                console.log(error);
            })};
    const clearResults = () => {
        searchInputRef.current.value = "";
        setResults([]);
    };

    return (
        <div className='searchbar-container'>
            <input className='search-input' type='search' ref={searchInputRef} onFocus={() => {setResults([])}} onBlur={unFocusInput} onChange={(e) => searchString(e.target.value)} />
            <div className="search-background">
                <SearchIcon className='searchbar-icon'/>
                <span className='search-placeholder'>Buscar...</span>
            </div>
            <ul className={ results.length ? "search-results visible" : "search-results"}>
                {results.map( (item) => {
                    return(
                        <li className='search-item' key={item.id} onClick={clearResults}>
                            <Link className='search-item-link' to={`/producto/${item.id}`}>
                                <img className='item-img' src={item.pictureUrl} alt={item.title} />
                                <span className='item-title'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchBar