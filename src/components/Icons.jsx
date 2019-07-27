import React from 'react';
import Icono1 from '../images/icono1.png';
import Icono2 from '../images/icono2.png';
import Icono3 from '../images/icono3.png';

const Icons = () => {
    return (
        <div className="icono">
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img src={Icono1} alt="" />
                        <h3>Efectividad</h3>
                        <p>Logramos grandes resultados, en el menor tiempo posible, utilizando pocos recursos.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={Icono2} alt="" />
                        <h3>Crecimiento</h3>
                        <p>Impulsamos el desarrollo y la mejora, para cumplir con la promesa de valor del producto.</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={Icono3} alt="" />
                        <h3>Accesibilidad</h3>
                        <p>Fácil, directo y preciso, desde cualquier parte, adaptable en todos los entornos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Icons;