import './Header.scss';
import Join from "./HeaderComponents/SignIn/Join-Section/Join";
import HeaderLabel from "./HeaderComponents/Label/HeaderLabel";
import Subscribe from "./HeaderComponents/Subscribe/Subscribe";
import Search from "./HeaderComponents/Searh/Search";
import ChangeTheme from "./HeaderComponents/ChangeTheme/ChangeTheme";
import BurgerMenu from "./HeaderComponents/BurgerMenu/BurgerMenu";


function Header() {
    return (
        <>
            <header>
                <div className="header-box">
                    <BurgerMenu/>
                    <Join/>
                    <HeaderLabel/>
                    <div className='search-area'>
                        <Subscribe/>
                        <Search/>
                        <ChangeTheme/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;