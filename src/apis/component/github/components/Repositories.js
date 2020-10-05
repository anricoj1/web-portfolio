/* react */
import React, { useState, useEffect } from 'react';

/* components */
import SearchBox from './repositories/SearchBox';
import SearchResults from './repositories/SearchResults';

/* css */
import './repositories/Repositories.css';

/* github */
import GitHub from '../GitHub';

const Repositories = () => {
    /* useState hooks */
    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState('');
    const [selection, setSelection] = useState('All');

    /* init results */
    var results = [];

    /* useEffect to fetch repos (async) */
    useEffect(() => {
        const getRepositories = async () => {
            setRepos(await new GitHub().getRepos());
        }

        getRepositories();
    },[]);


    return (
        <div className="repositories">
            <div className="container-fluid">
                <SearchBox filters={{"search" : search, "selection" : selection }} len={results.length} setSearch={e => setSearch(e)} setSelection={e => setSelection(e)} />
            </div>
            <SearchResults search={search} selection={selection} repos={repos} results={results} />
        </div>
    )
}

export default Repositories;
