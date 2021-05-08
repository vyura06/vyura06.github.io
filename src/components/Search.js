import React from 'react';
import JSONDATA from './MOCK_DATA.json';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import './Search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
            <input type="text" placeholder="🔍" onChange={event => {
                setSearchTerm(event.target.value);
            }} />
            {
                JSONDATA.filter((val) => {
                    if (searchTerm != "" && (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.last_name.toLowerCase().includes(searchTerm.toLowerCase()))) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="user" key={key}>
                            <a><Link to={val.link}>{val.first_name} {val.last_name}</Link></a>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Search;