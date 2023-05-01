import { useState } from 'react';
import './NavBar.scss';
import CharactersApi from "../../MaineContent/Characters/CharactersApi/CharactersApi";

const navMenu = ['NEWS', 'COMICS', 'CHARACTERS', 'MOVIES', 'TV SHOWS', 'GAMES', 'VIDEOS', 'MORE'];

function NavBar() {
    const [showCharacters, setShowCharacters] = useState(false);

    const menu = navMenu.map((item, index) => {
        return (
            <a key={index} className={`navMenu-${index + 1}`} href={`#`} onClick={() => setShowCharacters(!showCharacters)}>
                {item}
            </a>
        );
    });

    return (
        <div>
            <nav className="navMenu">
                {menu}
            </nav>
            {showCharacters && <CharactersApi />}
        </div>
    );
}

export default NavBar;
