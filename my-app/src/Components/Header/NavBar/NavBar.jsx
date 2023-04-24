// import styled from 'style-components';
import './NavBar.scss';
const navMenu = ['NEWS','COMICS','CHARACTERS','MOVIES','TV SHOWS','GAMES','VIDEOS','MORE'];

function NavBar() {
    const menu = navMenu.map((item, index) => {
        return (

            <a key={index} className={`navMenu-${index+1}`} href={`/`}>
                {item}
            </a>
        );
    });

    return (
        <nav className="navMenu">
            {menu}
        </nav>
    );
}

export default NavBar;
