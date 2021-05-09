import React, { useEffect, useRef, useState } from 'react';
import './SearchDestination.css'
import { FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CountMembersAndSetDates from './CountMembersAndSetDates/CountMembersAndSetDates';
import Shake from 'react-reveal/Shake';


const SearchDestination = ({ handleSearchResult }) => {
    const [locationNotFound, setLocationNotFound] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [handleErr, setHandleErr] = useState(false);
    const [suggestion, setSuggestion] = useState('');
    const [search, setSearch] = useState({ searchBox: '' });
    const [input, setInput] = useState(false);
    const [autocomplete, setAutocomplete] = useState([]);
    const autocompleteArea = useRef(null);

    useEffect(() => {
        const locationName = search.searchBox ? search.searchBox : "london"
        fetch(`http://localhost:4000/destination${locationName}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    const destination_countryAndCity = [{
                        country: result[0].name,
                        city: result[0].city
                    }];
                    sessionStorage.setItem("countryAndCity", JSON.stringify(destination_countryAndCity),);
                    handleSearchResult(result)
                };
                if (result.length === 0) {
                    setLocationNotFound('Location not found');
                };
            });
    }, [search]);

    // form func here ===================>
    const handleSubmit = (e) => {
        setSearch({ searchBox: e.target[0].defaultValue });
        setHandleErr(false);
        if (e.target[0].defaultValue === '') {
            setHandleErr("Destination is required");
        };
        e.preventDefault()
    };

    useEffect(() => {
        if (suggestion) {
            fetch(`http://localhost:4000/autocomplete/info${suggestion}`)
                .then(res => res.json())
                .then(result => {
                    setAutocomplete(result);
                    if (input) {
                        setAutocomplete([]);
                    }
                });
        }
    }, [suggestion]);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (autocompleteArea.current && !autocompleteArea.current.contains(e.target)) {
            setAutocomplete([]);
        };
    };

    const handleChange = (e) => {
        setSuggestion(e);
        setInput(false);
        setEmpty(false);
        setHandleErr(false);
        setLocationNotFound(false);
        if (e === '') {
            setEmpty(true);
            setSuggestion('fjkjeijlksfjejldksfelwkdfks');
            setAutocomplete([]);
        };
    };

    const handleSuggestion = (e) => {
        if (e.target.localName === 'img') {
            setSuggestion(e.target.nextSibling.innerText);
        }
        else {
            setSuggestion(e.target.innerText);
        };
        setInput(true);
    };

    return (
        <>
            <h3 className="mb-5 pb-2 item mt-2">Where do you want to go</h3>
            <form onSubmit={(e) => handleSubmit(e)} id="destination_form">
                <div ref={autocompleteArea} className="p-4 shadow-sm search_item">
                    <h5 className="pl-4 fw_bold">LOCATION</h5>
                    <div>
                        <FormControl
                            onChange={(e) => handleChange(e.target.value)}
                            className="p-4 border-0 search_input"
                            type="text"
                            name="searchBox"
                            value={isEmpty ? "" : suggestion}
                            placeholder="Add city, Landmark, or address" />
                    </div>
                    <>
                        {handleErr ?
                            <Shake>
                                <h6 className="text-danger pt-2">{handleErr}</h6>
                            </Shake> : ''
                        }
                        {
                            locationNotFound ? <Shake>
                                <h6 className="text-danger pt-2">{locationNotFound}</h6>
                            </Shake> : ''
                        }
                    </>
                    <div className="autocomplete_lest mt-4">
                        {
                            autocomplete.length > 0 ? autocomplete.map(item =>
                                <div onClick={(e) => handleSuggestion(e)}
                                    key={item.id} className="d-flex">
                                    <img src={item.img} alt="" />
                                    <p className="mt-auto mb-auto pl-5">{item.countryAndCity}</p>
                                </div>) : ''
                        }
                    </div>
                </div>
            </form>
            <CountMembersAndSetDates />
            <button
                type="submit"
                form="destination_form"
                className="border-0 mt-3
                     px-5 py-3 
                     text-white w-100"
                id="search_btn"
            >
                <FontAwesomeIcon className="mr-2" icon={faSearch} /> Search
         </button>
        </>
    );
};

export default SearchDestination;