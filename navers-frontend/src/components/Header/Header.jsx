import React from 'react';
import { Link } from 'react-router-dom';



const Header =  () =>{

    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="#" className="is-size-4 navbar-item">Naver's</Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link to="#" className="navbar-item">Projetos</Link>
                    <div className="navbar-dropdown">
                        <Link to="/cadastre-project" className="navbar-item">cadastrar</Link>
                        <Link to="/projects" className="navbar-item">Listar</Link>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link to="#" className="navbar-item">Navers</Link>
                    <div className="navbar-dropdown">
                        <Link to="/cadastre-naver" className="navbar-item">cadastrar</Link>
                        <Link to="/navers" className="navbar-item">Listar</Link>
                    </div>
                </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <Link to="#" className="navbar-item">OPÇÕES</Link>
                    <div className="navbar-dropdown">
                        <Link to="#" className="navbar-item">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;