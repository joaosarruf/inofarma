// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://assets.mypharma.com.br/4db27e925685a292b897d1f60f5bf42b.png" alt="Farmácia do Arnaldo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Busque na Farmácia do Arnaldo | João Pessoa - PB" />
            </div>
            <div className="nav-links">
                <Link to="/tempos-de-entrega">
                    <i className="icon-delivery"></i> Tempos de entrega
                </Link>
                <Link to="/login">
                    <i className="icon-login"></i> Entrar
                </Link>
                <Link to="/cesta">
                    <i className="icon-cart"></i> Cesta
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
