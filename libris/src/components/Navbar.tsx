import { Search, Person } from 'react-bootstrap-icons';
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom py-1">
            <div className="container">
                <a className="navbar-brand fs-2 fw-bold" href="/" style={{ fontFamily: 'EB Garamond' }}>
                    Libris
                </a>

                <div className="d-flex align-items-center gap-4">
                    <ul className="navbar-nav me-4 mb-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/livros">Livros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                    </ul>

                    <div className="d-flex gap-3">
                        <button className="btn p-0">
                            <Search size={22} />
                        </button>
                        <button className="btn p-0">
                            <Person size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};