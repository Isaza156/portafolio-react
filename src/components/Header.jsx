import React from 'react';

const Header = () => {
    return (
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column bg-home text-white'>

            <nav className="navbar navbar-expand-md navbar-dark container mb-5 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link text-white bhome" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white babout" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white bport" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white bcont" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main role="main" className="inner cover text-center container my-5">
                <h1 className="cover-heading nombre mt-5 mb-3">Jonathan Isaza</h1>
                <div className="linea"></div>
                <p className="lead mt-4 des">Desarrollador Web FrontEnd</p>
                <p className="lead">
                    <a href="/" className="btn btn-lg btn-secondary my-5">Contrátame Ahora</a>
                </p>
            </main>
        </div>
    )
}

export default Header;
                /*


<header>
            

                    <main role="main" class="inner cover my-5">
                        <div class="contenedor-texto-header">
                    <h1 class="titulo-header my-5 text-white">Jonathan Isaza</h1><br/>
                    <div class="linea"></div>
                    <h2 class="subtitulo-header text-white">Desarrollador Web FrontEnd</h2>
                    <p class="lead">
                            <a href="/" class="btn btn-lg btn-secondary my-5">Learn more</a>
                        </p>
                </div>
                    </main>
                </div>

            </div>
        </header>
        */