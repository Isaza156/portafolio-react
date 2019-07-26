import React from 'react';

const Header = () => {
    return (
        <div className="contenedor">
            <nav className="menu">
                <a href="/">Inicio</a>
                <a href="/">Acerca de</a>
                <a href="/">Portafolio</a>
                <a href="/">Contacto</a>
            </nav>
            <div className="contenedor-texto-header">
                <h1 className="titulo-header">Jonathan Isaza</h1>
                <div className="linea"></div>
                <h2 className="subtitulo-header">Desarrollador Web FrontEnd</h2>
                <a href="/" className="action">Contrátame Ahora</a>
            </div>
        </div>
    )
}

export default Header;