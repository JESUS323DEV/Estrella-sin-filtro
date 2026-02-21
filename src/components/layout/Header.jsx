import { useState } from 'react'
import { List } from "lucide-react"
import { Link } from 'react-router-dom'



export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);
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
                            <div className="burger">
                                <button onClick={() => setOpenMenu(!openMenu)}>
                                    <List />
                                </button>

                            </div>


                            {openMenu && (
                                <div className='links-nav'>
                                    <ul>
                                        <li><Link to="/inicio"
                                            onClick={() => {
                                                setOpenMenu(false)
                                            }}>
                                            Inicio</Link></li>

                                        <li><Link to="/servicios"
                                            onClick={() => {
                                                setOpenMenu(false)
                                            }} >
                                            Servicios
                                        </Link></li>


                                        <li><Link to="/proyectos"
                                            onClick={() => {
                                                setOpenMenu(false)
                                            }}>
                                            Proyectos
                                        </Link></li>


                                        <li><Link to="/desarrollo-web" onClick={() => {
                                            setOpenMenu(false)
                                        }}>
                                            Desarrollo Web
                                        </Link></li>


                                        <li><Link to="/contacto" onClick={() => {
                                            setOpenMenu(false)
                                        }}>Contacto
                                        </Link></li>
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