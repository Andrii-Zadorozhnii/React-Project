import grootImg from './../../Images/groot.png'
import './Page404.scss'

function NotFound() {
    return (
        <div className='Error-page'>
            <div className= 'Error-page__text'>404 ERROR</div>
            <div className='Error-page__image'>
                <img src={grootImg} alt="groot-image"/>
            </div>

        </div>
    );
}

export default NotFound;