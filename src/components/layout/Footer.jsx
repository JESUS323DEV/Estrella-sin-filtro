import { Link } from 'react-router-dom'
import ScrollSections from '../ScrollSections'

export default function Footer() {

    return (
        <>
            <footer>
                <div className="cont-footer">

                    <div className="title-footer">
                        <h4>Estrella sin filtro <small>© 2026</small></h4>
                        <p>Todos los derechos reservados.</p>
                    </div>

                    <nav className="footer-nav">
                        <Link to="/inicio" onClick={() => ScrollSections('hero')}>Inicio</Link>
                        <Link to="/servicios" onClick={() => ScrollSections('services')}>Servicios</Link>
                        <Link to="/proyectos" onClick={() => ScrollSections('projects')}>Proyectos</Link>
                        <Link to="/desarrollo-web" onClick={() => ScrollSections('webServices')}>Desarrollo Web</Link>
                        <Link to="/contacto" onClick={() => ScrollSections('contact')}>Contacto</Link>
                    </nav>

                    <small>Diseño y desarrollo web por <a href="https://webjesusdev.netlify.app/" target="_blank" rel="noopener noreferrer">JesúsDEV</a></small>

                </div>
            </footer>
        </>
    )
} 