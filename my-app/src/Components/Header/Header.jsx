import './Header.scss';
import Join from "./HeaderComponents/SignIn/Join-Section/Join";
import HeaderLabel from "./HeaderComponents/Label/HeaderLabel";
import Subscribe from "./HeaderComponents/Subscribe/Subscribe";
import Search from "./HeaderComponents/Searh/Search";


function Header() {
    return (
        <>
            <header>
                <Join/>
                <HeaderLabel/>
                <div className='search-area'>
                    <Subscribe/>
                    <Search/>
                </div>
            </header>
        </>
    );
};

export default Header;