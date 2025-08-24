import '../Navbar.css'
import CartWidget from './CartWidget'

function Navbar () {
    return (
        <header className="navbar-container">
            <a href="#" className="logo">Cositas</a>
            <nav className='navbar'>
                <ul className="nav-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar