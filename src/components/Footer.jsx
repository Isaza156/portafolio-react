import React from 'react';

const Footer = () => {
    return (
        <div className="p-5 text-center bg-footer text-white" id="contact">
            <div className="footer-texto container">
                <h2 className="titulo-footer mt-4">Contacta Conmigo</h2>
                <p className="parrafo-footer text-muted mt-4 mb-5">Será lo mejor que hagas hoy.</p>
            </div>
            <form action="" className="d-flex flex-column container" method="post">
                <input type="text" name="nombre" placeholder="Nombre" id="" className="nombre-contacto fondo my-3 text-white" />
                <input type="email" name="nombre" placeholder="Correo" id="" className="nombre-correo fondo my-3 text-white" />
                <textarea name="mensaje" className="mensaje fondo my-3 text-white " placeholder="Mensaje"></textarea>
                <div className="lead d-flex justify-content-end">
                    <input type="submit" value="Contactar" className="boton text-white btn btn-lg btn-secondary" />
                </div>
            </form>
            <div className="btn-whatsapp">
                <a href="https://api.whatsapp.com/send?phone=573122678810" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer;
