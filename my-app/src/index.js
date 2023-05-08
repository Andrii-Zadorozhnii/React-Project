import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './Components/Styles/reset.scss';
import '../src/Components/Styles/general.scss';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar/NavBar";
import MainSection from "./Components/MaineContent/MainSection";
import CharactersApi from "./Components/MaineContent/Characters/CharactersApi/CharactersApi";
import NotFound from "./Components/Page404/Page404";


function App() {
    const [hideMainSection, setHideMainSection] = useState(false);

    const handleRouteClick = (route) => {
        setHideMainSection(route !== "/characters");
    }

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <NavBar onRouteClick={handleRouteClick}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/characters" element={<div><CharactersApi/><MainSection/></div>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    {/*{hideMainSection ? <MainSection /> : null}*/}
                </div>
                <Footer/>

            </BrowserRouter>
        </React.StrictMode>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
