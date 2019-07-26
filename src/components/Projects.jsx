import React from 'react';
import Proyect1 from '../images/1.jpg';
import Proyect2 from '../images/2.jpg';
import Proyect3 from '../images/3.jpg';
import Proyect4 from '../images/4.jpg';
import Proyect5 from '../images/5.jpg';
import Proyect6 from '../images/6.jpg';

const Projects = () => {
    return (
        <div className="portafolio">
            <div className="contenedor">
                <div className="contenedor-texto-portafolio">
                    <h2 className="titulo-portafolio">Haz de tu trabajo algo extraordinario</h2>
                    <p className="parrafo-portafolio">Contáctame si estás preparado.</p>
                </div>
                <div className="contenedor-portafolio">
                    <img src={Proyect1} alt="" />
                    <img src={Proyect2} alt="" />
                    <img src={Proyect3} alt="" />
                    <img src={Proyect4} alt="" />
                    <img src={Proyect5} alt="" />
                    <img src={Proyect6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects;