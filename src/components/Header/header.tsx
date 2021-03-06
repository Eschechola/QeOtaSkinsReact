import React, { FC } from "react";
import './header.css';

const Header: FC = () =>{
    return(
        <header>
            <nav>
                <div className="nav-logo">
                    <a href="/">
                        <img src="/logo.png" className="logo"/>
                    </a>
                </div>
                <div className="nav-links">
                    <div className="nav-link">
                        <a href="/#">Skins</a>
                    </div>
                    
                    <div className="nav-link">
                        <a href="/#">Facas</a>
                    </div>
                    
                    <div className="nav-link">
                        <a href="/#">Luvas</a>
                    </div>
                    
                    <div className="nav-link">
                        <a href="/#">Contato</a>
                    </div>
                    
                    <div className="nav-link">
                        <a href="/#">Sobre</a>
                    </div>

                    <div className="nav-link">
                        <a href="/#" className="nav-link-button">Entrar</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;