import dp from './assets/profile.jpg'
function Header() {
    return (
        <header className='header'>
            <span></span>
            <div className="profile">
                <img src={dp} alt="Profile image" id='profile__img' />
                <h5 id='twitter'>GoldenEhis</h5>
                <h5 id='slack'>GodswillEhis</h5>
            </div>
        </header>
    )
}

export default Header;