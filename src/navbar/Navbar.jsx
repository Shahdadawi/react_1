import style from './navbar.module.css'


function Navbar() {

    return <nav className={`${style.nav} navbar navbar-expand-lg navbar-dark`}>
        <div className="container">
            <a className="navbar-brand fw-bold text-uppercase fs-3" href="#">
                Start Bootstrap
            </a>

            <div className="ms-auto d-flex gap-4">
                <a className="nav-link text-white fw-bold text-uppercase fs-6" href="#portfolio">
                    Portfolio
                </a>
                <a className="nav-link text-white fw-bold text-uppercase fs-6" href="#about">
                    About
                </a>
                <a className="nav-link text-white fw-bold text-uppercase fs-6" href="#">
                    Contact
                </a>
            </div>
        </div>
    </nav>


}

export default Navbar;