import React from 'react';
import JSONDATA from './MOCK_DATA.json';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
            <input type="text" placeholder="🔍" onChange={event => {
                setSearchTerm(event.target.value);
            }} />
            {
                JSONDATA.filter((val) => {
                    if (searchTerm != "" && (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="user" key={key}>
                            <a><a href={val.link}>{val.first_name}</a></a>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Search;