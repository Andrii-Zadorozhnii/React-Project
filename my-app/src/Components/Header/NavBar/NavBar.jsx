
import {NavLink} from "react-router-dom";
import './NavBar.scss';

const NavBar = () => {

    return (
        <nav className="navMenu">
            <div className="navItem">
                <NavLink to='/news'>NEWS</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/comics'>COMICS</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/characters'>CHARACTERS</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/movies'>MOVIES</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/tvshow'>TV SHOWS</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/games'>GAMES</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/video'>VIDEO</NavLink>
            </div>
            <div className="navItem">
                <NavLink to='/more'>MORE</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
