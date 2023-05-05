import {useState, useEffect} from 'react';
import './CharactersApi.scss';
import SearchCharacters from '../Search/SearchCharacters';
import '../Search/SearchCharacters.scss';

const SearchCard = () => {
    return (
        <></>
    )
}

//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9b9a40427eb372f72b3775e4f456a370&hash=97a77a62ca6b19c0c250ad87841df189
function MarvelCharacters() {
    const [name, setName] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
        const apiKey = '9b9a40427eb372f72b3775e4f456a370';
        const ts = '1';
        const hash = '97a77a62ca6b19c0c250ad87841df189';
        const limit = '100';

        const url = `${apiUrl}limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

        const cachedData = localStorage.getItem('marvelCharacters');

        if (cachedData) {
            // If cached data exists, use it and avoid calling the API
            setName(JSON.parse(cachedData));
            return;
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setName(data.data.results);
                console.log(data.data.results);
                // Save the data to local storage
                localStorage.setItem('marvelCharacters', JSON.stringify(data.data.results));
            })
            .catch((error) => {
                console.error('There was a problem fetching data:', error);
            });
    }, []);

    const toggleShowAll = () => {
        setShowAll((prevState) => !prevState);
    };

    const Card = () => {
        return (
            <div className={'character-box__main'}>
                <div className='character-box__main-header'>
                    <h1>Marvel Characters</h1>
                    <SearchCharacters/>
                    <button className='search-box-btn' onClick={toggleShowAll}>
                        {showAll ? 'Hide characters' : 'All characters'}
                    </button>
                </div>
                <ul className={'character-box'} style={{display: showAll ? 'flex' : 'none'}}>
                    {name.map((character) => (
                        <a className={'character-box__link'} href={'/'} key={character.id}>
                            <li className={'character-box__image'}>
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                     alt={character.name}/>
                            </li>
                            <div className={'character-box__mid'}></div>
                            <li className={'character-box__name'}>{character.name}</li>
                            <div className={'character-box__corner'}></div>
                        </a>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <div>{<Card/>}</div>
            <div>{<SearchCard/>}</div>
        </div>
    );
}


export default MarvelCharacters;
