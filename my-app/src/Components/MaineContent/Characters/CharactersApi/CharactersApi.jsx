import { useState, useEffect } from 'react';
import './CharactersApi.scss';

function MarvelCharacters() {
    const [name, setName] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
        const apiKey = '9b9a40427eb372f72b3775e4f456a370';
        const ts = '1';
        const hash = '97a77a62ca6b19c0c250ad87841df189';
        let limit = '100';

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

    let Card = () => {
        return (
            <div className={'character-box__main'}>
                <h1>Marvel Characters</h1>
                <ul className={'character-box'}>
                    {name.map((character) => (
                        <a className={'character-box__link'} href={'/'}>
                            <li className={'character-box__image'} key={character.image}>
                                <img
                                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                />
                            </li>
                            <div className={'character-box__mid'}></div>
                            <li className={'character-box__name'} key={character.name}>
                                {character.name}
                            </li>
                            {/*<li className={'character-box__description'} key={character.id}>*/}
                            {/*    {character.description}*/}
                            {/*</li>*/}
                            <div className={'character-box__corner'}></div>
                        </a>
                    ))}
                </ul>
            </div>
        );
    };

    return <div>{<Card />}</div>;
}

export default MarvelCharacters;
