import '../Navbar.css'
import CartWidget from './CartWidget'

function Navbar () {
    return (
        <header className="navbar-container">
            <h1><a href="#" className="logo">Cositas</a></h1>
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