import { useState } from 'react';
import './SearchCharacters.scss';

function SearchCharacters() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Do something with the search term
        console.log(searchTerm);
        document.querySelector('.character-box').style.display = 'none';
    };

    return (
        <div className='search-box'>
            <input
                className='search-box-input'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className='search-box-btn' onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchCharacters;
