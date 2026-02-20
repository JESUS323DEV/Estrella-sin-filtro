import { useState } from 'react'
import { List } from "lucide-react"




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
                                        <li><a href="#">Inicio</a></li>
                                        <li><a href="#">Servicios</a></li>
                                        <li><a href="#">Proyectos</a></li>
                                        <li><a href="#">Desarrollo Web </a></li>
                                        <li><a href="#">Contacto</a></li>
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