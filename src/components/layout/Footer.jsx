import { Link } from 'react-router-dom'
import ScrollSections from '../ScrollSections'

export default function Footer() {

    return (
        <>
            <footer>
                <div className="cont-footer">
                    <div className='footer-wrap'>

                        <div className="title-footer">
                            <h4>Estrella sin filtro</h4>
                            <p>Todos los derechos reservados.  <small>© 2026</small></p>
                        </div>

                        <div className='cont-nav-footer'>
                            <nav className="footer-nav">
                                <Link to="/inicio" onClick={() => ScrollSections('hero')}>Inicio</Link>
                                <Link to="/servicios" onClick={() => ScrollSections('services')}>Servicios</Link>
                                <Link to="/proyectos" onClick={() => ScrollSections('projects')}>Proyectos</Link>
                                <Link to="/desarrollo-web" onClick={() => ScrollSections('webServices')}>Desarrollo Web</Link>
                            </nav>
                            <nav className="footer-nav">
                                <Link to="/contacto" onClick={() => ScrollSections('contact')}>Contacto</Link>
                                <Link to="/aviso-legal" onClick={() => ScrollSections('')}>Aviso Legal</Link>
                                <Link to="/politica-privacidad" onClick={() => ScrollSections('')}>Privacidad</Link>
                            </nav>
                        </div>
                        <small>Diseño y desarrollo web por <a href="https://webjesusdev.netlify.app/" target="_blank" rel="noopener noreferrer">JesúsDEV</a></small>
                    </div>

                </div>
            </footer>
        </>
    )
} 