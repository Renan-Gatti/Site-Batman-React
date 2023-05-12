import React from "react";
import './header.css';
import Logo from '../../assets/fundos-do-batman (2).jpg';
import { Link } from "react-router-dom";


function Header () {
    return (
        <div className="header-container">
            <header>
                <img alt="" id="logo" src={Logo} />
                <nav className="nav-header">
                    <ul className="list-header">
                        <Link style={{textDecoration: 'none'}} to={'/'}>
                            <li className="list-item-header">Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/contato'}>
                            <li className="list-item-header">Contato</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                            <li className="list-item-header">Fotos</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                            <li className="list-item-header">Comentários</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Header;
