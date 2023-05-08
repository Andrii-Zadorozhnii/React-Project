import {useState, useEffect} from 'react';
import './ChangeTheme.scss';

function ChangeTheme() {
    const [color, setColor] = useState(localStorage.getItem('color') || 'White');
    const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor') || '#202020');

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--header-and-footer-color', color.toLowerCase());
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--bg-color', bgColor.toLowerCase());
        localStorage.setItem('bgColor', bgColor);
    }, [bgColor]);

    const handleClick = () => {
        setColor(color === 'black' ? 'White' : 'black');
        setBgColor(bgColor === '#202020' ? 'White' : '#202020')
    };

    return (
        <>
        <div className='change-theme__section'>
            <button className="change-theme" type="button" onClick={handleClick}>
                {color === 'black' ? <svg onClick={() => {document.querySelector('.change-theme').style.marginLeft='41px'}} className='change-theme__btn-moon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.996 12.882a1 1 0 00-1.585-.9 6.11 6.11 0 01-3.188 1.162 5.948 5.948 0 01-3.95-1.158c-1.333-.985-2.139-2.415-2.367-3.935s.124-3.124 1.109-4.456a.998.998 0 00-.901-1.589 10.082 10.082 0 00-5.895 2.651 9.943 9.943 0 00-3.137 6.386c-.254 2.749.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-.631 7.311-2.266 3.313-4.022 3.567-6.772zm-2.429 1.792a7.988 7.988 0 01-2.416 3.441c-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848A7.932 7.932 0 016.58 6.12a8.058 8.058 0 012.731-1.672 8.008 8.008 0 002.772 9.146 7.94 7.94 0 005.272 1.545 8.083 8.083 0 002.21-.465z"/>
                    </svg>
                    : <svg onClick={() => {document.querySelector('.change-theme').style.marginLeft='0px'}} className='change-theme__btn-sun' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="yellow"
                            d="M16 26a2 2 0 012 2v2a2 2 0 11-4 0v-2a2 2 0 012-2zm0-20a2 2 0 01-2-2V2a2 2 0 114 0v2a2 2 0 01-2 2zm14 8a2 2 0 110 4h-2a2 2 0 110-4h2zM6 16a2 2 0 01-2 2H2a2 2 0 110-4h2a2 2 0 012 2zm19.899 7.071l1.414 1.414a2 2 0 11-2.828 2.828l-1.414-1.414a2 2 0 112.828-2.828zM6.101 8.929L4.687 7.515a2 2 0 112.828-2.828l1.414 1.414a2 2 0 11-2.828 2.828zm19.798 0a2 2 0 11-2.828-2.828l1.414-1.414a2 2 0 112.828 2.828l-1.414 1.414zM6.101 23.071a2 2 0 112.828 2.828l-1.414 1.414a2 2 0 11-2.828-2.828l1.414-1.414zM16 8a8 8 0 100 16 8 8 0 000-16zm0 13a5 5 0 11.001-10.001A5 5 0 0116 21z"/>
                    </svg>
                }
            </button>
        </div>
        </>
    );
}

export default ChangeTheme;
