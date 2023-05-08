import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="burger-menu">
            <button className="burger-menu__toggle" onClick={handleMenuToggle}>
                <span className="burger-menu__icon">Menu</span>
            </button>
            <nav className={`burger-menu__nav ${isMenuOpen ? 'open' : ''}`}>
                <button className="burger-menu__close" onClick={handleMenuToggle}>
                    X
                </button>
                <div className="navItem">
                    <NavLink to="/news" onClick={handleCloseMenu}>
                        NEWS
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/comics" onClick={handleCloseMenu}>
                        COMICS
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/characters" onClick={handleCloseMenu}>
                        CHARACTERS
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/movies" onClick={handleCloseMenu}>
                        MOVIES
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/tvshow" onClick={handleCloseMenu}>
                        TV SHOWS
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/games" onClick={handleCloseMenu}>
                        GAMES
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/video" onClick={handleCloseMenu}>
                        VIDEO
                    </NavLink>
                </div>
                <div className="navItem">
                    <NavLink to="/more" onClick={handleCloseMenu}>
                        MORE
                    </NavLink>
                </div>

            </nav>
        </div>
    );
};

export default BurgerMenu;
