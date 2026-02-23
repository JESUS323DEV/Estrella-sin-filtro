import { useState, useEffect } from 'react'
import { List, X } from "lucide-react"
import { Link, useLocation } from 'react-router-dom'
import ScrollSections from '../../components/ScrollSections'  // ← Importa ScrollSections

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('/inicio');
    const location = useLocation();

    useEffect(() => {
        const sectionMap = {
            'inicio': '/inicio',
            'services': '/servicios',
            'projects': '/proyectos',
            'webServices': '/desarrollo-web',
            'contact': '/contacto'
        };

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const route = sectionMap[sectionId];
                    if (route) {
                        setActiveSection(route);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.keys(sectionMap).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const isActive = (path) => {
        return activeSection === path ? 'active' : '';
    };

    // Mapeo de rutas a IDs de secciones (para ScrollSections)
    const handleNavClick = (sectionId) => {
        if (sectionId === 'inicio') {
            // Inicio - scroll a 0
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Otras secciones - usa ScrollSections
            ScrollSections(sectionId);
        }
    };

    return (
        <>
            <header>
                <nav>
                    <div className="cont-nav">
                        <div className='logo'>
                            <span className='estrella'>Estrella</span>
                            <span className="sin">sin</span>
                            <span className="filtro">filtro</span>
                        </div>

                        <div className="cont-menu">
                            {/* Menu Desktop */}
                            <div className='links-nav desktop-menu'>
                                <ul>
                                    <li>
                                        <Link
                                            to="/inicio"
                                            className={isActive('/inicio')}
                                            onClick={() => handleNavClick('inicio')}
                                        >
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/servicios"
                                            className={isActive('/servicios')}
                                            onClick={() => handleNavClick('services')}
                                        >
                                            Servicios
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/proyectos"
                                            className={isActive('/proyectos')}
                                            onClick={() => handleNavClick('projects')}
                                        >
                                            Proyectos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/desarrollo-web"
                                            className={isActive('/desarrollo-web')}
                                            onClick={() => handleNavClick('webServices')}
                                        >
                                            Desarrollo Web
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contacto"
                                            className={isActive('/contacto')}
                                            onClick={() => handleNavClick('contact')}
                                        >
                                            Contacto
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Botón hamburguesa */}
                            <div className="burger">
                                <button onClick={() => setOpenMenu(!openMenu)}>
                                    {openMenu ? <X /> : <List />}
                                </button>
                            </div>

                            {/* Menu Mobile */}
                            {openMenu && (
                                <div className='links-nav mobile-menu'>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/inicio"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    handleNavClick('inicio');
                                                }}
                                            >
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/servicios"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    handleNavClick('services');
                                                }}
                                            >
                                                Servicios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/proyectos"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    handleNavClick('projects');
                                                }}
                                            >
                                                Proyectos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/desarrollo-web"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    handleNavClick('webServices');
                                                }}
                                            >
                                                Desarrollo Web
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contacto"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    handleNavClick('contact');
                                                }}
                                            >
                                                Contacto
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
