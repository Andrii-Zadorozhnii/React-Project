import {useState, useEffect} from 'react';
import './CharactersApi.scss';
import '../Search/SearchCharacters.scss';


function MarvelCharacters() {
    const [characters, setCharacters] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [displayModal, setDisplayModal] = useState(false);
    const [name, setName] = useState('');
    const [imageRoute, setImageRoute] = useState();
    const [image, setImage] = useState('');
    const [description, setDescription] = useState(`No description`);
    const [comics, setComics] = useState();
    const [series, setSeries] = useState();


    useEffect(() => {
        const apiKey = '9b9a40427eb372f72b3775e4f456a370'
        const hash = '97a77a62ca6b19c0c250ad87841df189'
        const limit = '100'
        const url = 'https://gateway.marvel.com:443/v1/public/characters?' +
            `limit=${limit}&ts=1&apikey=${apiKey}&hash=${hash}`;
        const cachedData = localStorage.getItem('marvelCharacters');

        if (cachedData) {
            setCharacters(JSON.parse(cachedData));
            return;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.data.results);
                localStorage.setItem('marvelCharacters', JSON.stringify(data.data.results));
            })
            .catch(error => console.error('There was a problem fetching data:', error));
    }, []);

    const toggleShowAll = () => {
        setShowAll(prevState => !prevState);
    };

    const handleInputChange = event => {
        const inputVal = event.target.value;
        setSearchTerm(inputVal);
        localStorage.setItem("searchTerm", inputVal);
    };

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    function seriesList(data){
        const seriesNames = data.map(series => series.name);
        return (
            <ul>
                {seriesNames.map(name => (
                    <li style={{marginBottom: `5px`}} key={name}>- {name}</li>
                ))}
            </ul>
        );
    }
    function comicsList(data){
        const seriesNames = data.map(series => series.name);
        return (
            <ul>
                {seriesNames.map(name => (
                    <li  style={{marginBottom: `5px`}} key={name}>- {name}</li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <div className='search-section'>
                <h1>Search Characters: </h1>
                <div className="search-box">
                    <input
                        className="search-box-input"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Write character name"
                    />
                </div>
                {/*<button className='search-box-btn' onClick={toggleShowAll}>*/}
                {/*    {showAll ? 'Hide characters' : 'Show characters'}*/}
                {/*</button>*/}
            </div>
            <div className={'character-box__main'}>
                <ul className={'character-box'} style={{display: showAll ? 'flex' : 'none'}}>
                    {filteredCharacters.map(character => (
                        <div className={'character-box__link'} key={character.id}
                             onClick={() => {
                                 setDisplayModal(true)
                                 setImageRoute(`${character.thumbnail.path}.${character.thumbnail.extension}`);
                                 setImage(character.name);
                                 setName(character.name);
                                 setDescription(character.description);
                                 setSeries(seriesList(character.series.items));
                                 setComics(comicsList(character.comics.items));

                             }}>
                            <li className={'character-box__image'}>
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                     alt={character.name}/>
                            </li>
                            <div className={'character-box__mid'}></div>
                            <li className={'character-box__name'}>{character.name}</li>
                            <div className={'character-box__corner'}></div>
                        </div>
                    ))}
                </ul>
                <div className={'character-box__modal'} style={{display: displayModal ? 'block' : 'none'}}>
                    <div>
                        <button type="button" className={'character-box__modal-button'} onClick={() => {
                            setDisplayModal(false)
                        }}>X
                        </button>
                        <div className={'character-box__modal-content'}>
                            <div className={'character-box__modal-content_image'}>
                                <img src={imageRoute} alt={image}/>
                            </div>
                            <div className={'content-box'}>
                                <h1 className={'character-box__modal-content_name'}>
                                    {name}
                                </h1>
                                <p className={'character-box__modal-content_description'}>
                                    Description: <br/><br/>{description ? description :
                                    <div style={{display: 'flex'}}><p> Nothing to say</p></div>}
                                </p>
                                <div className={`character-box__modal-content_description`}>
                                    Comics: <br/><br/>
                                    <ul>
                                        <p className={'character-box__modal-series'} >
                                            {comics}
                                        </p>
                                    </ul>
                                </div>
                                <div className={`character-box__modal-content_description`}>
                                    Series: <br/><br/>
                                    <ul>
                                        <p className={'character-box__modal-series'} >
                                            {series}
                                        </p>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarvelCharacters;
