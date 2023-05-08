import './Join.scss';
import {NavLink} from 'react-router-dom';
import RegistrationForm from '../../RegisterForm/RegisterForm';
import {useState} from 'react';

function Join() {
    const [showRegister, setShowRegister] = useState(false);

    const handleNavLinkClick = () => {
        setShowRegister(!showRegister);
    };

    return (
        <>
            <NavLink to='/join' onClick={handleNavLinkClick}>
                <a className='join-section'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 65.6 66.7'
                         style={{fill: 'var(--header-and-footer-color)'}}>
                        <path
                            d='M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z'/>
                    </svg>
                    <p>Sign in | join</p>
                </a>
            </NavLink>
            {showRegister && (
                <RegistrationForm
                />
            )}
        </>
    );
}

export default Join;
