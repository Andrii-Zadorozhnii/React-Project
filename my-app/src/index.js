import React from 'react';
import ReactDOM from 'react-dom/client';
//Styles
import '../src/Components/reset.scss';
import '../src/Components/Styles/general.scss';

//***********************************************

//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar/NavBar";
//***********************************************


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <NavBar/>
        {/*<Footer />*/}
    </React.StrictMode>
);