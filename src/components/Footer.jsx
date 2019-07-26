import React from 'react';

const Footer = () => {
    return (
        <div className="contenedor">
            <div className="footer-texto">
                <h2 className="titulo-footer">Contacta Conmigo</h2>
                <p className="parrafo-footer">Será lo mejor que hagas hoy.</p>
            </div>
            <form action="" className="formulario" method="post">
                <input type="text" name="nombre" placeholder="Nombre" id="" className="nombre-contacto" />
                <input type="email" name="nombre" placeholder="Correo" id="" className="nombre-correo" />
                <textarea name="mensaje" className="mensaje" placeholder="Mensaje"></textarea>
                <div className="derecha">
                    <input type="submit" value="Contactar" className="boton-envio" />
                </div>
            </form>
        </div>
    )
}

export default Footer;