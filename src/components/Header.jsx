import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <a className="nav-link text-white babout" href='#about'>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white bport" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white bcont" href="#contact">Contact</a>
                        </li>                       
                    </ul>
                </div>
                <div className='container d-flex justify-content-end '>
              <a className='text-white p-2' href="https://twitter.com/isaza156" target='_blank'><FontAwesomeIcon icon={['fab', 'twitter-square']} size='2x'/></a>
              <a className='text-white p-2' href="https://github.com/isaza156" target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} size='2x'/></a>
              <a className='text-white p-2' href="https://linkedin.com/in/isaza156"  target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/></a>
            </div>
            </nav>
            
            <main role="main" className="inner cover text-center container my-5">
                <h1 className="cover-heading nombre mt-5 mb-4">Jonathan Isaza</h1>
                <p className="lead mt-5 des">Desarrollador Web FrontEnd</p>
                <p className="lead">
                    <a href="/" className="btn btn-lg btn-secondary my-5">Contrátame Ahora</a>
                </p>
            </main>
        </div>
    )
}

export default Header;            