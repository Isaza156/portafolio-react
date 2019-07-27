import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="text-center">
                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column bg-home">
                    <header class="masthead mb-auto">
                        <nav class="navbar navbar-expand-md navbar-dark">
                            <a class="navbar-brand" href="/">Expand at md</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarsExample04">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="/">Disabled</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="/" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                                            <a class="dropdown-item" href="/">Action</a>
                                            <a class="dropdown-item" href="/">Another action</a>
                                            <a class="dropdown-item" href="/">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-md-0">
                                    <input class="form-control" type="text" placeholder="Search"/>
                                  </form>
                                </div>
                              </nav>
                </header>

                        <main role="main" class="inner cover">
                            <h1 class="cover-heading">Cover your page.</h1>
                            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                            <p class="lead">
                                <a href="/" class="btn btn-lg btn-secondary">Learn more</a>
                            </p>
                        </main>

                        <footer class="mastfoot mt-auto">
                            <div class="inner">
                                <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                            </div>
                        </footer>
              </div>
                    <div class="contenedor-texto-header">
                        <h1 class="titulo-header">Jonathan Isaza</h1>
                        <div class="linea"></div>
                        <h2 class="subtitulo-header">Desarrollador Web FrontEnd</h2>
                        <a href="" class="action">Contrátame Ahora</a>
                    </div>
                </div>
    </header>
            )
        }

        export default Header;
                /*
<div classNameNameNameName="contenedor">
                <nav classNameNameNameName="menu">
                    <a href="/">Inicio</a>
                    <a href="/">Acerca de</a>
                    <a href="/">Portafolio</a>
                    <a href="/">Contacto</a>
                </nav>
                <div classNameNameNameName="contenedor-texto-header">
                    <h1 classNameNameNameName="titulo-header">Jonathan Isaza</h1>
                    <div classNameNameNameName="linea"></div>
                    <h2 classNameNameNameName="subtitulo-header">Desarrollador Web FrontEnd</h2>
                    <a href="/" classNameNameNameName="action">Contrátame Ahora</a>
                </div>
            </div> */