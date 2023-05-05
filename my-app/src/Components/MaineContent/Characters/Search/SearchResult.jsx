import { useState } from "react";

const SearchResult = ({ searchTerm, setSearchTerm }) => {
    const [showAll, setShowAll] = useState(false);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const findDataByName = (name, json, looking) => {
        for (let i = 0; i < json.length; i++) {
            if (json[i].name.toLowerCase() === name.toLowerCase()) {
                return json[i][looking];
            }
        }
        return null;
    };

    const filterCharacters = (charactersData) => {
        return charactersData.filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        localStorage.setItem('searchTerm', value);
    };

    const handleSearch = () => {
        const charactersData = JSON.parse(localStorage.getItem('marvelCharacters'));
        const filteredData = filterCharacters(charactersData);
        setFilteredCharacters(filteredData);
        setShowAll(true);
    };

    const toggleShowAll = () => {
        setShowAll((prevState) => !prevState);
    };

    return (
        <div>
            <div className="search-box">
                <input
                    className="search-box-input"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button className="search-box-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {showAll && (
                <div className={'character-box__main'}>
                    {filteredCharacters.map((character) => (
                        <a className={'character-box__link'} href={'/'} key={character.id}>
                            <li
                                className={'character-box__image'}
                                style={{
                                    backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                                }}
                            ></li>
                            <li className={'character-box__name'}>{character.name}</li>
                            <div className={'character-box__corner'}></div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResult;
