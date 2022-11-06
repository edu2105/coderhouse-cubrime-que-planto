import React, { useState, useRef, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import getProducts from "../../../../firebase/getProducts";
import { Link } from 'react-router-dom';
import { MobileContext } from "../../../../context/MobileContext";
import './SearchBar.css';

const SearchBar = () => {
    const [results, setResults] = useState([]);
    const [searchFinished, setSearchFinished] = useState(false);
    const {navMobileToggleHandler, mobileHeader} = useContext(MobileContext);
    const searchInputRef = useRef();

    const unFocusInput = (e) => e.target.value="";
    const searchString = (string) => {
        if(!string){
            clearResults();
            return;
        };
        getProducts("title", string)
            .then( (result) => {
                setSearchFinished(true);
                const listMatches = result.docs.map( item => {
                    return { ...item.data() }
                });
                listMatches.length ? setResults(listMatches) : setResults([]);
            })
            .catch((error) => {
                console.log(error);
            });
    };            
    const clearResults = () => {
        searchInputRef.current.value = "";
        setSearchFinished(false);
        setResults([]);
    };

    return (
        <div className={mobileHeader ? 'searchbar-container mobile' : 'searchbar-container'}>
            <input className='search-input' type='search' ref={searchInputRef} onFocus={() => {setResults([])}} onBlur={unFocusInput} onChange={(e) => searchString(e.target.value)} />
            <div className="search-background">
                <SearchIcon className='searchbar-icon'/>
                <span className='search-placeholder'>Buscar...</span>
            </div>
            <ul className={ searchFinished ? "search-results visible" : "search-results"}>
                {results.length ? (
                    results.map(({id, title, pictureUrl}) => {
                        return(
                            <li className='search-item' key={id} onClick={clearResults}>
                                <Link 
                                    className='search-item-link' 
                                    to={`/producto/${id}`}
                                    onClick={() => navMobileToggleHandler(false)} >
                                    <img className='item-img' src={pictureUrl} alt={title} />
                                    <span className='item-title'>{title}</span>
                                </Link>
                            </li>
                        )
                    })
                ) : (
                    <li className='search-item-notfound'>No hay resultados disponibles</li>
                )}
            </ul>
        </div>
    )
}

export default SearchBar