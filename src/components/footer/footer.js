import React from "react";
import './footer.css';
import Logo from '../../assets/fundos-do-batman (2).jpg';
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="footer-container">
            <footer>
                <nav className="nav-footer">
                    <ul className="list-footer">
                        <Link style={{textDecoration: 'none'}} to={'/'}>
                            <li className="list-item-footer">Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/contato'}>
                            <li className="list-item-footer">Contato</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                            <li className="list-item-footer">Fotos</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                            <li className="list-item-footer">Comentários</li>
                        </Link>
                    </ul>
                </nav>
                <img id="logo-footer" alt='' src={Logo}/>
                <span className="span-footer">Todos os direitos reservados©</span>
                <span className="span-footer">Desenvolvido por Renan Gatti</span>
            </footer>
        </div>
    )
};

export default Footer;