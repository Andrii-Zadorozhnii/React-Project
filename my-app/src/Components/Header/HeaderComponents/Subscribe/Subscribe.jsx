import './Subscribe.scss';
import {NavLink} from "react-router-dom";



function Subscribe() {
    return (
        <>
            <NavLink to='/subscribe' className='subscribe-section' href='/'>
                <img className="subscribe-section__image"
                     src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                     alt="Marvel Unlimited logo"/>
                <div>
                    <p>Marvel Unlimited</p>
                    <span>Subscribe</span>
                </div>
            </NavLink>
        </>
    )
}

export default Subscribe;