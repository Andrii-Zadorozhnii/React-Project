import './Footer.scss';

let footerNav = ['about Marvel', 'Help/Faqs', 'Careers', 'Internships']
let footerNav2 = ['advertising', 'Disney+', 'Marvelhq.com', 'redeem digital comics']

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a className="main-footer__logo" href="/">
                        <span className="icon--svg main-footer__logo--svg"
                              aria-hidden="true">
                        <svg viewBox="0 0 36 52"
                             xmlns="http://www.w3.org/2000/svg"
                             aria-hidden="true"><rect
                            fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE"
                                                                                   d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg></span></a>
            </div>

            <ul className='footer-nav'>
                {footerNav.map(navItem => (
                    <li className='footer-nav__item' key={navItem}><a className='footer-nav__item-link'
                                                                      href='/'>{navItem}</a></li>
                ))}
            </ul>
            <ul className='footer-nav'>
                {footerNav2.map(navItem2 => (
                    <li className='footer-nav__item' key={navItem2}><a className='footer-nav__item-link'
                                                                       href='/'>{navItem2}</a></li>
                ))}
            </ul>

            <div className='footer-promotion'>
                <div className="main-footer__promotion">
                    <a className="main-footer__promotion-link"
                       href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer">

                        <div className="main-footer__promotion-image">
                            <img src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                                 alt="Marvel Insider Logo" className="main-footer__promotion-image"></img>
                        </div>
                        <div className="main-footer__promotion-info">
                            <h4 className="main-footer__promotion-title">Marvel Insider</h4>
                            <p className="main-footer__promotion-description">Get Rewarded for Being a Marvel Fan</p>
                        </div>
                    </a>
                </div>
                <div className="main-footer__promotion">
                    <a className="main-footer__promotion-link"
                       href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer">
                        <div className="main-footer__promotion-image-wrapper">
                            <img src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                                 alt="Marvel Unlimited Logo" className="main-footer__promotion-image"></img>
                        </div>
                        <div className="main-footer__promotion-info">
                            <h4 className="main-footer__promotion-title">Marvel Unlimited</h4>
                            <p className="main-footer__promotion-description">Access Over 30,000+ Digital Comics</p>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
)
}

export default Footer;