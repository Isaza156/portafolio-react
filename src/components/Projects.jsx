import React from 'react';
import Proyect1 from '../images/1.jpg';
import Proyect2 from '../images/2.jpg';
import Proyect3 from '../images/3.jpg';
import Proyect4 from '../images/4.jpg';
import Proyect5 from '../images/5.jpg';
import Proyect6 from '../images/6.jpg';

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div className=" text-center p-5">
                    <h2 className="titulo-portafolio">Haz de tu trabajo algo extraordinario</h2>
                    <p className="text-muted mt-4">Contáctame si estás preparado.</p>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-4 col-sm-12 mb-4">
                        <img className='img-fluid opa' src={Proyect1} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                        <img className='img-fluid opa' src={Proyect2} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                        <img className='img-fluid opa' src={Proyect3} alt="" />
                    </div> 
                    <div className="col-md-4 col-sm-12 mb-5">
                        <img className='img-fluid opa' src={Proyect4} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-5">
                        <img className='img-fluid opa' src={Proyect5} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-5">
                        <img className='img-fluid opa' src={Proyect6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;