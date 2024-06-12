// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                className={"form-control"}
                type="text"
                placeholder="Pesquisar Palavras"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;
