import './Subscribe.scss';


function Subscribe() {
    return (
        <>
            <a className='subscribe-section' href='/'>
                <img className="subscribe-section__image"
                     src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                     alt="Marvel Unlimited logo"/>
                <div>
                    <p>Marvel Unlimited</p>
                    <span>Subscribe</span>
                </div>
            </a>
        </>
    )
}

export default Subscribe;